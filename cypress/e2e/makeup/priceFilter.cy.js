import HomePage from "../../support/pages/makeup/HomePage";
import CategoryPage from "../../support/pages/makeup/CategoryPage";
import { beforeEach } from "mocha";

describe('checks price filters functionality', () => {
    const homePage = new HomePage();
    const categoryPage = new CategoryPage();

    beforeEach(() => {
        homePage.visit();
        homePage.getFirstCategory().click()
    });

    it('enter price range by hands', () => {
        const minValue = 100;
        const maxValue = 500;
    
        cy.intercept('https://makeup.com.ua/ajax/filter/?hash=price_from%3D100%26price_to%3D500')
          .as('getFilteredProducts') 
    
        categoryPage.getMinPriceInput().clear().type(minValue) 
        categoryPage.getMaxPriceInput().clear().type(maxValue)
        
        cy.wait('@getFilteredProducts')
        categoryPage.getProducts().each(($product) => {
            const productPrice = $product.data('price');
         
            expect(parseInt(productPrice)).to.be.at.most(maxValue) 
            expect(parseInt(productPrice)).to.be.at.least(minValue)  
        })   
        
    })

    it('filters products by predeffined filter of range "250-500"', () => {
        const minValue = 250;
        const maxValue = 500;

        cy.intercept('https://makeup.com.ua/ajax/filter/?hash=price_from%3D250%26price_to%3D500')
          .as('getFilteredProducts')
    
        categoryPage.getPriceFilter(4).click()

        cy.wait('@getFilteredProducts')
        categoryPage.getProducts().each(($product) => {
            const productPrice = $product.data('price');
         
            expect(parseInt(productPrice)).to.be.at.most(maxValue) 
            expect(parseInt(productPrice)).to.be.at.least(minValue)  
        })   
    });

    it('filters products by predeffined filter of range "750-1000"', () => {
        const minValue = 750;
        const maxValue = 1000;

        cy.intercept(`https://makeup.com.ua/ajax/filter/?hash=price_from%3D750%26price_to%3D1000`)
          .as('getFilteredProducts');

        categoryPage.getPriceFilter(6).click()

        cy.wait('@getFilteredProducts')
        categoryPage.getProducts().each(($product) => {
            const productPrice = $product.data('price');
         
            expect(parseInt(productPrice)).to.be.at.most(maxValue) 
            expect(parseInt(productPrice)).to.be.at.least(minValue)  
        }) 
    });
});

    

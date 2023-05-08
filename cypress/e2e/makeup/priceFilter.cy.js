import HomePage from "../../support/pages/makeup/HomePage";
import CategoryPage from "../../support/pages/makeup/CategoryPage";

it('filters products by price range', () => {
    const homePage = new HomePage();
    const categoryPage = new CategoryPage();

    const minValue = 100;
    const maxValue = 500;

    
    cy.intercept('https://makeup.com.ua/ajax/filter/?hash=price_from%3D100%26price_to%3D500').as('getCategory') 

    homePage.visit();
    homePage.getFirstCategory().click()
    
    categoryPage.getMinPriceFilter().clear().type(minValue) 
    categoryPage.getMaxPriceFilter().clear().type(maxValue)
    
    cy.wait('@getCategory')
    categoryPage.getProducts().each(($el) => {
        const productPrice = $el.data('price');
     
        expect(parseInt(productPrice)).to.be.at.most(maxValue) 
        expect(parseInt(productPrice)).to.be.at.least(minValue)  
    })   
})
    

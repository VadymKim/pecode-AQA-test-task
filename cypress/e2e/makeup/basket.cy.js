import HomePage from "../../support/pages/makeup/HomePage";
import CategoryPage from "../../support/pages/makeup/CategoryPage";
import ProductPage from "../../support/pages/makeup/ProductPage";
import BasketModal from "../../support/pages/makeup/BasketModal";
import { expect } from "chai";

describe('basket suite', () => {
    it(`can add a product to the basket 
        and check correctness of total sum calculation`, () => {
      const homePage = new HomePage();
      const categoryPage = new CategoryPage();
      const productPage = new ProductPage();  
      const basketModal = new BasketModal();
      
      homePage.visit()
      cy.url().should('contain', Cypress.config().baseUrl)
      
      homePage.getFirstCategory().click()
      cy.url().should('contain', '/categorys')
      
      categoryPage.getProduct().as('product1').then(($product) => {
        categoryPage.getProductTitle($product).invoke('text').as('productName1')
      })
      
      buyProduct('@product1') 

      // cy.get('@product1').click()
      // productPage.getBasketButton().click()  
      // basketModal.getBasket().should('exist').as('cart')
      // basketModal.getCloseButton().should('have.length', 1).click()

      homePage.visit()
      cy.url().should('contain', Cypress.config().baseUrl)
      
      homePage.getSecondCategory().click()
      cy.url().should('contain', '/categorys')

      
      categoryPage.getProduct().as('product2').then(($product) => {
        categoryPage.getProductTitle($product).invoke('text').as('productName2')
      })

      buyProduct('@product2')    
      // cy.get('@product2').click()
      // productPage.getBasketButton().click()  
      // basketModal.getBasket().should('exist')
      homePage.getBasketButton().click()
      basketModal.getBasket().should('exist')

      basketModal.getProductsList().should('have.length', 2).as('basketList')
      cy.get('@basketList').then(($list) => {
        
        basketModal.getProductName(($list[0])).should('have.text', '@productName1')
        basketModal.getProductName(($list[1])).should('have.text', '@productName2')
        const productPrice1 = basketModal.getProductPrice(($list[0]));
        const productPrice2 = basketModal.getProductPrice(($list[1]));

        const calculatedOrderPrice = productPrice1 + productPrice2;
        basketModal.getOrderPrice().should('eq', calculatedOrderPrice)

      })
      
      function buyProduct(product) {
        cy.get(product).click()
        productPage.getBasketButton().click()  
        basketModal.getBasket().should('exist').as('cart')
        basketModal.getCloseButton().should('have.length', 1).click()
      }
                  
    })
  })
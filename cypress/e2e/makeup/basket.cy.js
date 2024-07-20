import HomePage from "../../support/pages/makeup/HomePage";
import CategoryPage from "../../support/pages/makeup/CategoryPage";
import ProductPage from "../../support/pages/makeup/ProductPage";
import BasketModal from "../../support/pages/makeup/BasketModal";
import { Header } from "../../support/page_fragments/header.fragment";


describe('basket suite', () => {
    it(`checks if  the user can add a product to the basket 
        and the correctness of total sum calculation`, () => {
      const homePage = new HomePage();
      const categoryPage = new CategoryPage();
      const productPage = new ProductPage();  
      const basketModal = new BasketModal();
      const header = new Header();
      
      homePage.visit()
      cy.log('Add products to basket');
      header.selectCategoryByNumber(1);
      categoryPage.getProductByNumber(1).as('product1');
      addProductToCart('@product1') 
      header.selectCategoryByNumber(2);
      categoryPage.getProductByNumber(1).as('product2');
      addProductToCart('@product2')    
      header.goToBasket();
      basketModal.waitForLoading();
      basketModal.getProductsList().should('have.length', 2)
      cy.log('Total sum calculation')    
      basketModal.calculateTotalPrice().as('calculatedTotal');
      basketModal.getOrderPrice().as('orderPrice');
      cy.then(function () {
        expect(this.calculatedTotal).to.equal(this.orderPrice);
      }) 
      
      function addProductToCart(product) {
        cy.get(product).click()
        productPage.addProductToCart()
        basketModal.getBasket().should('exist').as('cart')
        basketModal.close()
      }
                  
    })
  })
class BasketModal {
    getBasket() {
       
        return cy.get('div.cart');
    }
    
    getCloseButton() {
       
        return this.getBasket().find('div.close-icon');
    }
    
    getProductsList() {
       
        return this.getBasket().find('li.data-id');
    }

    getProductName(product) {
      
        return cy.wrap(product).find('div.product__header').text();
    }

    getProductPrice(product) {
        const price = cy.wrap(product).find('div.product__price').text();
        const cleanedPrice = price.slice(0, price.indexOf('&nbsp'));
        
        return parseInt(cleanedPrice); 
    }
   
    getOrderPrice() {
      
        return parseInt(this.getBasket().find('div.order-price').find('strong').text());
    }
    
}



export default BasketModal;
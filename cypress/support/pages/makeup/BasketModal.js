class BasketModal {
    getBasket() {
       
        return cy.get('div.popup__window');
    }
    
    getCloseButton() {
       
        return this.getBasket().find('div.close-icon');
    }
    
    getProductsList() {
       
        return this.getBasket().find('li.product-list__item');
    }

    getProductName(product) {
      
        return cy.wrap(product).find('div.product__header').text();
    }

    getProductPrice(product) {
        return new Cypress.Promise((resolve) => {
            let productPrice = 0;
            cy.wrap(product)
              .find('div.product__price')
              .invoke('text')
              .then((price) => {
                let trimmedPrice = price.trim()
                //let arr = trimmedString.split(/[\s\u00A0]+/);
                productPrice = trimmedPrice.slice(0, trimmedPrice.search('&nbsp'));

                resolve(parseInt(productPrice));
              });
            })
        
    }
   
    getOrderPrice() {
        return cy.then(() => {
            this.getBasket()
                   .find('div.order-price')
                   .find('strong')
                   .invoke('text')
                   .then(($price) => {
                        return(parseInt($price));
                   })
        })
    }

    getProductRemoveButton(product) {

        return cy.wrap(product).find('div.product__button-remove');
    }

    close() {
        this.getCloseButton().click();
    }
    waitForLoading() {
        this.getBasket().should('be.visible');
    }
    calculateTotalPrice() {
        
        return cy.then(() => {
                    let total = 0; 
                    this.getProductsList().then(($products) => {
                        console.log($products)
                        $products.toArray().forEach((product) => {
                            console.log(product);
                            this.getProductPrice(product).then((price) => {
                                console.log(price)
                                 total += price;
                            });
                        })
                    }).then(() => { return total });
                })
    }
    
}



export default BasketModal;
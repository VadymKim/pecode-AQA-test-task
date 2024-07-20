class ProductPage {
    getBasketButton() {
        return cy.get('div.buy')
    }
    addProductToCart() {
        this.getBasketButton().click();
    }
}

export default ProductPage;
class CategoryPage {
   getProducts() {
       return cy.get('li[data-id]');
   }
   getProductsTitle() {
       return this.getProducts().find('a[data-default-name]');
   }
   
   getMinPriceInput() {
       return cy.get('input[data-id="price-from"]');
   }
   getMaxPriceInput() {
       return cy.get('input[data-id="price-to"]');
   }
   getPriceFilterList() {
        return cy.get('ul.catalog-price-list')
   }
   getPriceFilter(filterNumber) {
    return this.getPriceFilterList().find(`#catalog-price-dia-_${filterNumber}`)
   }
   getProductTitle(product) {
       console.log('getProductTitle product', product);
       return cy.wrap(product).find('a[data-default-name]');
   }
   getProduct(product) {
    return this.getProducts().eq(product);
   }
}

export default CategoryPage;
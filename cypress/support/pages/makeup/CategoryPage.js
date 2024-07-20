class CategoryPage {
   getProducts() {
       return cy.get('li[data-price]');
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
       
       return cy.wrap(product).find('a[data-default-name]');
   }
   getProductByNumber(productNumber) {
        return this.getProducts().eq(productNumber);
   }
   selectRandomProduct() {
        cy.log('inside selectRandomProduct'); 
        return (this.getProducts().its('length').then((length) => {

            const randomNumber = Math.floor(Math.random() * length);
            console.log(randomNumber);
            this.getProductByNumber(randomNumber);
        })
    )
   }
}

export default CategoryPage;
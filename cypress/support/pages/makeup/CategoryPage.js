class CategoryPage {
   getProducts() {
       return cy.get('li[data-id]');
   }
   getProductsTitle() {
       return this.getProducts().find('a[data-default-name]');
   }
   
   getMinPriceFilter() {
       return cy.get('input[data-id="price-from"]');
   }
   getMaxPriceFilter() {
       return cy.get('input[data-id="price-to"]');
   }
   getProductTitle(product) {
        console.log('getProductTitle product', product);
       return cy.wrap(product).find('a[data-default-name]');
   }
   getProduct() {
    return this.getProducts().eq(1);
   }
//    getRandomProduct() {
    
//        this.getProducts().then(($products) => {
//             const maxValue = $products.length;
//             console.log('$products.length', $products.length);
//             const randomNumber = Math.floor(Math.random() * maxValue);
            
//             return $products.eq(randomNumber);
             
//         });
        
        
        
//          return 12;
   //}

}
export default CategoryPage;
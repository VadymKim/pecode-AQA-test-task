import CategoryPage from "./CategoryPage";

class HomePage {
    visit() {
        cy.visit("/");
    }
    getSearchButton() {
        return cy.get('div[data-popup-handler="search"]');
    }

    getSearchInput() {
        return cy.get('.search-input');
    }
    getCategories() {
        
        return cy.get('ul.menu-list');
            
    }
    getFirstCategory() {

        return this.getCategories().find('li.menu-list__item:nth-child(3)')
    }
    getSecondCategory() {
        
        return this.getCategories().find('li.menu-list__item:nth-child(5)')
    }
    
    getBasketButton() {
        return cy.get('div.header-basket');
    }
}
export default HomePage;

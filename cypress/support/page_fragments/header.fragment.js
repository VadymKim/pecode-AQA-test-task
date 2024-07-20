

export class Header {
    getSearchButton() {
        return cy.get('div[data-popup-handler="search"]');
    }
    getSearchInput() {
        return cy.get('.search-input');
    }
    getNavBar = () => cy.get('nav.menu');
    getMenu = () => this.getNavBar().find('ul.menu-list');
    getMenuItems = () => this.getMenu()
                             .find('li.menu-list__item')
                             .not('.mobile-only');
    
    selectCategoryByName = (menuItemName) => {
        this.getMenuItems().contains(menuItemName).click();

    }
    selectCategoryByNumber = (menuItemNumber) => {
        this.getMenuItems().eq(menuItemNumber).click();
    }
    getBasketButton() {
        return cy.get('div.header-basket');
    }    
    goToBasket() {
        this.getBasketButton().click();
    }
    clickSearchButton = () => {
        this.getSearchButton().click()
    };
}
import HomePage from "../../support/pages/makeup/HomePage";
import CategoryPage from "../../support/pages/makeup/CategoryPage";

describe('search suite', () => {
    it('search the item by name and check whether results contain search item', () => {
      const homePage = new HomePage();
      const categoryPage = new CategoryPage();
      
      homePage.visit()
      cy.url().should('contain', Cypress.config().baseUrl)
      homePage.getSearchButton().click();

      homePage.getSearchInput().type('versace {enter}')
      cy.url().should('contain', 'versace')
     
      categoryPage.getProductsTitle().should(($title) => {
        const upperCasedTitle = $title.text().toUpperCase();
        expect(upperCasedTitle).to.include('VERSACE')
      })
    })
})


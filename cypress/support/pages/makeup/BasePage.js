export class BasePage {
    url = '/';
    visit() {
        cy.visit(this.url);
        cy.url().should('contain', `${Cypress.config().baseUrl}${this.url}`);
    }
} 
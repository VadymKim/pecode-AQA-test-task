import { BasePage } from "./BasePage";
import { Header } from "../../page_fragments/header.fragment";

class HomePage extends BasePage {
    header = new Header();

    checkIfLoaded = () => {
        cy.url().should('contain', Cypress.config().baseUrl) 
    }
   
}
export default HomePage;

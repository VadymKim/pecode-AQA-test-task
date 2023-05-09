# pecode-AQA-test-task
This repo is implementation of test task for AQA candidates

How to install:

1. git clone [reference to repo]
2. npm install

Open Cypress
1. npx cypress open
2. E2E Testing
3. Start E2E testing
 
All the tests are in the folder e2e/makeup. 
There are three tests:
1. search.cy.js - checks correctness of search functionality
2. priceFilter.cy.js - checks sorting products by price
3. basket.cy.js - checks capability of  putting products into the cart
                  and the correctness of total price calculation

Page Objects are in the folder cypress/support/pages/makeup

As a reporter I used "mochawesome". 

Notes:
    1. About task. Well, it was interesting, but not easy (always hard to conduct testing in uncontrolled environment)
    2. I didn't write the test which failes (part of task), the reason is I have got the test that failes (priceFilter.cy.js, just bug on the site) 
       
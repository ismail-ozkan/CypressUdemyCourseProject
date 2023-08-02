import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pageObject/HomePage.cy";
import ProductPage from "../../pageObject/ProductPage.cy";

const homePage = new HomePage();
const productPage = new ProductPage();

let name;
Given('I open ECommerce Page', function () {
    cy.visit(Cypress.env('url')+'/angularpractice/');
})
When('I add items to Cart', function () {
    homePage.getShop().click();

    cy.selectProduct('Blackberry');
    cy.selectProduct('Nokia');

    cy.reload();

    this.data.productName.forEach(function (element) {
        cy.selectProduct(element);
    })
    productPage.checkOutButton().click();
})
When('Validate the total prices', () => {
    var totalPrice = 0;
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) => {
        cy.log($el.text());
        cy.log($el.text().substring(3));
        const number = Number($el.text().substring(3));
        totalPrice += number;
    }).then(() => {
        //57. Practise exercise continuation on product sum values
        cy.log("totalPrice: " + totalPrice);
        cy.get('td.text-right h3 strong').then(function (element) {
            const displayedTotalPrice = Number(element.text().substring(3));
            cy.log(displayedTotalPrice);
            expect(displayedTotalPrice).to.equal(totalPrice);
        })
    });
})

Then('select the country submit and verify Thankyou', () => {
    cy.contains('Checkout').click();
    cy.get('#country').type('Turkey').then(() => {
        cy.get('.suggestions a').click();
    })
    cy.get('label[for="checkbox2"]').click({force: true});
    cy.contains('Purchase').click()

    cy.get('.alert').should('include.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')

    cy.get('.alert').then(function (element) {
        const actualText = element.text();
        expect(actualText.includes('Success')).to.be.true;
    })
})
When('I fill the form details', function (dataTable) {
    //homePage.getEditBox().type(this.data.name);
    //homePage.getGender().select(this.data.gender);
    //dataTable.rawTable return multidimensional array
    name = dataTable.rawTable[1][0];
    homePage.getEditBox().type(name);
    homePage.getGender().select(dataTable.rawTable[1][1]);
});
Then('Validate the forms behaviour', function () {
    homePage.getTwoWayDataBinding().should('have.value', name);
    homePage.getEditBox().should('have.attr','minlength',2);
    homePage.getEntrepreneaur().should('be.disabled');
    Cypress.config("defaultCommandTimeout",12000);
});
Then('select the Shop Page', function () {
    homePage.getShop().click();
});
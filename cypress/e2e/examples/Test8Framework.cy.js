/// <reference types="Cypress" />
import HomePage from './pageObject/HomePage.cy.js';
import ProductPage from './pageObject/ProductPage.cy.js';
describe('Second Framework Test Suite', () => {
    //44. Agenda of framework topics and starting with test building
    before(function () {
        // runs before all tests in the block
        cy.fixture('example').then(function (data){
            this.data = data;
        })
    })

    xit('Fixture usage Test Case', function () {
        //46. How fixtures works in driving data
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name);
        cy.get('select').select(this.data.gender);
        //47. Validating attribute properties and their behaviour with cypress assertions
        cy.get(':nth-child(4) > .ng-pristine').should('have.value', this.data.name);

        cy.get("div[class='form-group'] input[name='name']").should('have.attr','minlength',2);

        //50 Debugging with pause() or debug() methods
        cy.get('#inlineRadio3').should('be.disabled').debug();
        cy.pause();
        //48. Building customized Cypress commands for reusing the code
        cy.get(':nth-child(2) > .nav-link').click();
        /*cy.get('h4.card-title a').each(($el,index, $list) => {
            if ($el.text().includes('Blackberry')) {
                cy.get('button.btn.btn-info').eq(index).click();
            }
        })*/
        cy.selectProduct('Blackberry');
        cy.selectProduct('Nokia');

        cy.reload();

        //49. Parameterizing the test Data from Json files using each command
        this.data.productName.forEach(function (element) {
            cy.selectProduct(element);
        })
    })
    it('Test with POM for same test case', function () {
        //51. Implementing Page object Design pattern into Cypress
        //cy.visit('https://rahulshettyacademy.com/angularpractice/');
         //58. Importance of environmental variables
        cy.visit(Cypress.env('url')+'/angularpractice/');
        const homePage = new HomePage();
        const productPage = new ProductPage();
        homePage.getEditBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getEditBox().should('have.attr','minlength',2);
        homePage.getEntrepreneaur().should('be.disabled');
        homePage.getShop().click();

        cy.selectProduct('Blackberry');
        cy.selectProduct('Nokia');

        cy.reload();

        this.data.productName.forEach(function (element) {
            cy.selectProduct(element);
        })
        //52. Modifying existing tests into Page object pattern as per Cypress standards
        productPage.checkOutButton().click();

        //56. Implementing the Sum of products functionality
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
               /* cy.log('element.text(): '+ element.text());
                const displayedTotalPriceText = element.text().substring(3);
                const displayedTotalPrice = Number(displayedTotalPriceText);*/
                const displayedTotalPrice = Number(element.text().substring(3));

                cy.log(displayedTotalPrice);
                //cy.log(displayedTotalPriceText===115000); // false
                expect(displayedTotalPrice).to.equal(totalPrice);
            })
        });
        // Understanding Asynchronous Issue
        cy.log("totalPrice: "+totalPrice); // it's 0 cos Cypress commands are asynchronous

        //cy.pause();
        cy.contains('Checkout').click();
        Cypress.config("defaultCommandTimeout",12000);
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

})

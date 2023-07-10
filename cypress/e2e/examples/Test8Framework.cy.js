/// <reference types="Cypress" />
describe('Second Framework Test Suite', () => {
    //44. Agenda of framework topics and starting with test building
    before(function () {
        // runs before all tests in the block
        cy.fixture('example').then(function (data){
            this.data = data;
        })
    })

    it('Fixture usage Test Case', function () {
        //46. How fixtures works in driving data
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
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

})

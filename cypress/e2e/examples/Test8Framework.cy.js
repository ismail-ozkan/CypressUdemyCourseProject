/// <reference types="Cypress" />
describe('Second Framework Test Suite', () => {
    //44. Agenda of framework topics and starting with test building
    before(function () {
        // runs before all tests in the block
        cy.fixture('user').then(function (data){
            this.data = data;
        })
    })

    it('Fixture usage Test Case', function () {
        //46. How fixtures works in driving data
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name);
        cy.get('select').select(this.data.gender);

    })
})

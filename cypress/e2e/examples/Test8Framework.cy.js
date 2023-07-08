/// <reference types="Cypress" />
describe('First Framework Test Suite', () => {
    //44. Agenda of framework topics and starting with test building
    before(() => {
        // runs before all tests in the block
    })

    it('First Test Case', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type('Bob');
        cy.get('select').select('Male')
    })

})



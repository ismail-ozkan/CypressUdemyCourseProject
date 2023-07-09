/// <reference types="Cypress" />

describe('Second Framework Test Suite', () => {

    before(function () {

    })

    it('fixture usage test', () => {
        cy.visit('https://www.google.com');
        cy.fixture('user').then(function (data) {
            cy.get('#APjFqb').type(data.name);
        })

    })
})
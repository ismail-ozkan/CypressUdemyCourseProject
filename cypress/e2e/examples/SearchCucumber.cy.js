/// <reference types="Cypress" />

describe('Search Features Tests', () => {

    it('Search ca', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get("input[type='search']").type('ca');
        cy.wait(2000);
        //cy.get('.product').should('have.length', 4); -> this gives assertion error because of visibility
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.search-button').click().then(() => {
            expect(cy.contains('Carrot'));
        })
        // Parent to child
        cy.get('.products').find('.product').should('have.length', 4);
        cy.get('.products').find('.product').eq(1).find('h4').contains('Carrot');

        cy.get(':nth-child(3) > .product-action > button').click().then((function () {
            console.log('sf');
        }))
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

        // find Cashews and click add to cart button under it
        cy.get('.products').find('.product').each(($el, index,list) => {
            const textOfVeg = $el.find('h4.product-name').text();
            if (textOfVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        })
        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART');


        // this is to print in logs
        cy.get('.brand').then((logoelement) => {
            cy.log(logoelement.text());
        })
        //const logoText = cy.get('.brand');
        //cy.log(logoText);

        // for avoiding using same locator again and again
        // instead we use "as()" method to refer this locator with assigned name
        cy.get('[href="#/offers"]').as('offerLink');
        cy.get('@offerLink').click();
    })
})
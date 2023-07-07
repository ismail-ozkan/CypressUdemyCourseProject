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
        cy.get(':nth-child(3) > .product-action > button').click();
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();

        // find Cashews and click add to cart button under it
        cy.get('.products').find('.product').each(($el, index,list) => {
            const textOfVeg = $el.find('h4.product-name').text();
            if (textOfVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click();
            }
        })

        cy.get('.brand').then((logoelement) => {
            cy.log(logoelement.text());
        })
        //const logoText = cy.get('.brand').then(() => {
        //    cy.log(logoText.text());
        //});
    })
})
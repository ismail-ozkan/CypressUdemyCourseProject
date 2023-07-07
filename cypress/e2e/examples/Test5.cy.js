/// <reference types="Cypress" />

describe('Fifth Test Suite', () => {

    it('Test Case1', () => {
        //37. Handling Web tables with Cypress using each command
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el,index,$list) => {
            const text = $el.text();
            if (text.includes("Python")) {
                const price = $el.next().text();
                expect(price).to.equal('25');
            }
        })

        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el,index,$list) => {
            const text = $el.text();
            if (text.includes('Resume')) {
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then((price) => {
                    const priceText = price.text();
                    expect(priceText).to.equal('0');
                })
            }
        })
    })
})

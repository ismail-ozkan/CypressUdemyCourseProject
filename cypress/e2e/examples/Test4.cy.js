/// <reference types="Cypress" />

describe('Fourth Test Suite', () => {

    it('Test Case1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //33. How Cypress auto handles Alerts in web Apps
        cy.get('#alertbtn').click();

        cy.get('[value="Confirm"]').click();

        //window:alert
        cy.on('window:alert',(str)=>{ // on() method get 2 argument,
            // second one is a method to get text and inside this method we can use expect() method to verify
            // mocha (framework)
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        //window:confirm
        cy.on('window:confirm',(str)=>{
            // mocha (framework)
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })

    })
})
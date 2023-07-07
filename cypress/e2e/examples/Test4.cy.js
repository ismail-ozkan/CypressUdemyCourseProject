/// <reference types="Cypress" />

describe('Fourth Test Suite', () => {

    xit('Test Case1', () => {

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
        cy.url().should('include','rahul');
        //34. Handling Child tab with combination of Cypress & Jquery commands
        // new tab and window handling with invoke() and removeAttr() method
        cy.get('#opentab').invoke('removeAttr','target').click();

        // we verify that current url is "https://www.qaclickacademy.com/"
        cy.url().should('include','https://www.qaclickacademy.com/');

        //35. Navigating browser controls using Cypress
        //cy.go("back");

    })

    it('Test for new tab in practice.cydeo.com', () => {
        cy.visit('https://practice.cydeo.com/windows');
        cy.get('a[href="/windows/new"]').invoke('removeAttr', 'target').click();
        cy.url().should('include','new');
        cy.go('back');
    })
})
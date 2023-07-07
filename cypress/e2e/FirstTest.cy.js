describe('My First Test Suite', () => {

    //This file out of scope for testing framework
    // because we have configured "specPattern: 'cypress/e2e/examples/*.js'," in config file

    it('My First Test Case', () => {
        // test steps
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })

    it('My Second Test Case', () => {
        // test steps
    })

})
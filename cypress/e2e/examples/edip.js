/// <reference types="Cypress" />

//importing  page
//import HomePage from "../pageObjects/homepage";

describe('framework', function() {

    before(function(){
        //runs once before all tests in the lock
        cy.log('this is BEFORE');
        cy.fixture('example').then(function(data){
            this.data = data;// with this keyword we can use this data entire class. it become global variable
        })
    })

    beforeEach(function(){
        //run before each test block
        cy.log('BeforeEach');
    })

    it('writing name and selecting gender' , function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name); //or input[name='name']:nth-child(2)
        cy.get('select').select(this.data.gender);

    })

    it.skip('validate attribute properties', function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        //asserting passing data
        cy.get("div[class='form-group'] input[name='name']").type(this.data.name);
        cy.get("input[name='name']:nth-child(1)").should('have.value', this.data.name); // should() ->JQuery

        // asserting minlength is 2
        cy.get("div[class='form-group'] input[name='name']").should('have.attr', 'minlength', '2');

        //second way with using prop()
        //cy.get("div[class='form-group'] input[name='name']").then(function(e1){
        // const length = e1.prop('minlength');
        // expect(length).to.equal('2');
        // })

        cy.pause();
        //validating is disable or not
        cy.get('#inlineRadio3').should('be.disabled');
    })

    xit('writing name and selecting gender with POM' , function(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        const homePage = new HomePage(); // creating object from class
        homePage.getNameBox().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value', this.data.name);
        homePage.getNameBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneaur().should('be.disabled');
        Cypress.config('defaultCommandTimeout', 8000);
        homePage.getShopTab().click();
    })

})
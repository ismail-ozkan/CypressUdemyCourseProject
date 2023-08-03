import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('get a book instead of all books', function (){

    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

    // cy.intercept({requestobject},{responseobject});
    cy.intercept({
        method: 'GET',
        url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
        {
        statusCode: 200,
        body: [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301" }]

    }).as('bookretrievals');
    cy.get('button[class="btn btn-primary"]').click();
    cy.wait('@bookretrievals').then(({request,response}) => {
        cy.get('tr').should('have.length',response.body.length+1);

    })

    cy.get('p').should('contain','Oops only 1 Book available');
})
When('get all books from ui and api', function () {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

    cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }).as('bookretrievals');
    cy.get('button[class="btn btn-primary"]').click();

});
Then('compare ui and api', function () {
    cy.wait('@bookretrievals').then(({request,response}) => {
        cy.get('tr').should('have.length',response.body.length+1);
        cy.log("response.body.length : "+ response.body.length);
    })
});
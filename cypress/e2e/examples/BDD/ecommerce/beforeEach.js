beforeEach(()=>
{
    cy.fixture('user').then(function(data)
    {
        this.data=data
    })
});
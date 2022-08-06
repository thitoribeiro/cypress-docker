describe('Cypress Tests with Docker', () => {
    it('Should load website', () => {
        cy.visit('https://www.google.com')
    })

    // it('Should load h1 element', () => {
    //     cy.get('h1').should('be.visible')
    // })
})
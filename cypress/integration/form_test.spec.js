describe('Form inputs', () => {
    it('Can navigate to the site', () => {
        cy.visit('http://localhost:3000/Form')
        cy.url().should('include', 'localhost')
    })

    it('can type in input fields', () => {
        cy.get('input[name="instructions"]')
            .type('All of the toppings')
            .should('have.value', 'All of the toppings')
    })

    it('can check the toppings', () => {
        cy.get('[type="checkbox"]').check()
    })
})

describe('Submitting the form', () => {
    it('Submits the form', () => {
        cy.visit('http://localhost:3000/Form')
        cy.get('[type="checkbox"]').check()
        cy.get('input[name="instructions"]')
            .type('All of the toppings')
        cy.get('button.submit').click()
    })
})
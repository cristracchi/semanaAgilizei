// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0pPhsRtSRAJ0VQ06v55iPVToj5wVb6m%2BO61ap3iyt30GDy4SA%2BkToGUTZUoKFe5GzKG55uSo0FQr1wVEhG2T5J8m7U348uHve%2B%2FM4IizY1ftnsG4%2BsibPSUwCFkNcZTXlVzflo7zLE%2FArq2X5IrUtnp%2FbFYXM8gLfbacsLmXsCb%2FpCQcnHcHZqW6LqLvxLruFf5TRh%2BhNSXAh603FrWENJ6hky5nsZV%2BQw5JtqDyQgUUF6EbnfKtofWAM9xtv0%2BFn%2BpK5c2sU9z6xO5nCloQ9SfNLbJjhB2izlOiq9VxsPAASeXM3xi0EIG3nfxeZDmahKYoJTL9M2N2i3va%2F6ah8einoDpZ4vW%2B3Mgt%2FWHvwxZdBafNoVoI2NRACjdh%2BPSoGHPRD0GLAaKb01RyzfUWuwE%3D000313'
        )
})

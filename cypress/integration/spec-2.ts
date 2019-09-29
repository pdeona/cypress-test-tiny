import runTests from '../helpers/run-tests'

runTests('page', () => {
  it('status is 400', () => {
    cy.visit('http://localhost:3000')

    cy.document().contains('400')
  })
})

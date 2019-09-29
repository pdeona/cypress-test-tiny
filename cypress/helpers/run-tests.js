export default (description, test) => {
  (['mobile', 'desktop']).forEach(view => {
    beforeEach(() => {
      cy.server()
  
      cy.route({
        headers: {
          'status': 400
        },
        method: 'POST',
        url: '/fail',
        response: 'fail',
        status: 400
      })

      if (view === 'mobile') cy.viewport('iphone-6+')
      else cy.viewport(800, 600)
    })

    describe(description, test)
  })
}

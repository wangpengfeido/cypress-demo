describe('percy-snapshots', function() {
  it('percy-demo', () => {
    cy.visit('http://localhost:3000/charts-base');

    cy.wait(1000);

    cy.get('.charts-container').percySnapshot('test');
  });
});

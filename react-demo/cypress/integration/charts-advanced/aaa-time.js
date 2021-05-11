describe('charts-advanced', function() {
  it('snapshot', () => {
    cy.clock(new Date('2021-01-01 00:00').getTime());

    cy.visit('http://localhost:3000/charts-advanced');

    cy.wait(1000);
    cy.tick(1000);
  });
});

describe('charts-base', function() {
  it('snapshot', () => {
    cy.visit('http://localhost:3000/charts-base');

    cy.wait(1000);

    cy.get('.charts-container').toMatchImageSnapshot({
      imageConfig: {
        threshold: 0.001,
      },
    });
  });
});

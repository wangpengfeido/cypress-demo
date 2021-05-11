describe('applitools-snapshots', function() {
  beforeEach(() => {
    cy.eyesOpen({
      appName: 'my-demo',
      testName: 'applitools-demo',
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  it('applitools-demo', () => {
    cy.visit('http://localhost:3000/charts-base');

    cy.wait(1000);

    cy.eyesCheckWindow({
      target: 'region',
      selector: {
        type: 'css',
        selector: '.charts-container',
      },
    });
  });
});

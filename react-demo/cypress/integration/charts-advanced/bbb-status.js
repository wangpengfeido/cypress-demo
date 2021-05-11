// import { getChartsData } from '../../../src/pages/charts-advanced/chart-data';
import * as ChartData from '../../../src/pages/charts-advanced/chart-data';

describe('charts-advanced', function() {
  it('snapshot', () => {
    cy.clock(new Date('2021-01-01 00:00').getTime());

    cy.stub(ChartData, 'getChartsData', () => {
      return Promise.resolve([{ x: 1, y: 1 }]);
      // return () => {
      //   return [{ x: 1, y: 1 }];
      // };
    });

    cy.visit('http://localhost:3000/charts-advanced');


    cy.wait(1000);
    cy.tick(1000);
  });
});

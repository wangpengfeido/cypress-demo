// import { getChartsData } from '../../../src/pages/charts-advanced/chart-data';
import * as ChartData from '../../../src/pages/charts-advanced/chart-data';

describe('charts-advanced', function() {
  it('snapshot', () => {
    cy.intercept(`http://localhost:10000/**`, (req) => {
      let params = {};
      req.url
        .split('?')[1]
        .split('&')
        .forEach((item) => {
          let temp = item.split('=');
          params[temp[0]] = temp[1];
        });
      let from = parseInt(params.from),
        end = parseInt(params.end);
      let res = [];
      for (let i = from, j = 1; i <= end; i += 1000 * 60 * 60 * 24, j++) {
        res.push({ x: i, y: j + 1 });
      }
      req.reply(JSON.stringify(res));
    });

    cy.clock(new Date('2021-01-01 00:00').getTime());

    cy.visit('http://localhost:3000/charts-advanced');

    cy.wait(1000);
    cy.tick(1000);

    cy.get('.charts-container').toMatchImageSnapshot({
      imageConfig: {
        threshold: 0.001,
      },
    });
  });
});

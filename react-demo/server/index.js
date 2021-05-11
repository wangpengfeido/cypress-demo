const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  let query = ctx.query;
  let from = parseInt(query.from);
  let end = parseInt(query.end);

  let res = [];
  for (let i = from, j = 1; i <= end; i += 1000 * 60 * 60 * 24, j++) {
    res.push({ x: i, y: Math.round(Math.random() * 100) });
  }

  ctx.body = JSON.stringify(res);
  ctx.set('access-control-allow-origin', '*');
});

app.listen(10000);

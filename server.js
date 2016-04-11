'use strict';
const koa = require('koa');
const serve = require('koa-static');
const app = koa();
const port = process.env.PORT || 8080;

app.use(serve('./dist'));
app.listen(port, () => console.log('Listening on', port));

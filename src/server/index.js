require('dotenv').config();
const koa = require('koa');
const serve = require('koa-static');
const cors = require('koa-cors');
const botServer = require('./bot-server');

const app = koa();
const port = process.env.API_PORT || 8081;
const corsOptions = {
  methods: ['GET'],
};


app.use(serve('./dist'));
app.use(cors(corsOptions));
app.use(botServer);

app.listen(port, () => console.log('Listening on', port));

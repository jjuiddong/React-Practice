require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
//import createFakeData from './createFakeData';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    //createFakeData();
  })
  .catch((e) => {
    console.error(e);
  });

const app = new Koa();
const router = new Router();

// router.get('/', (ctx) => {
//   ctx.body = 'Home';
// });
// router.get('/about', (ctx) => {
//   ctx.body = 'About';
// });
// router.get('/about/:name?', (ctx) => {
//   const { name } = ctx.params;
//   ctx.body = name ? `${name} About` : 'About';
// });

router.use('/api', api.routes());

// router.get('/posts', (ctx) => {
//   const { id } = ctx.query;
//   ctx.body = id ? `Post #${id}` : 'Post No Id';
// });
app.use(bodyParser());
app.use(jwtMiddleware);

app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../../blog-frontend/build');
app.use(serve(buildDirectory));
app.use(async (ctx) => {
  if (ctx.status === 404 && ctx.path.indexOf('./api') !== 0) {
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

// app.use(async (ctx, next) => {
//   console.log(ctx.url);
//   console.log(1);
//   if (ctx.query.authorized !== '1') {
//     ctx.status = 401;
//     return;
//   }
//   await next();
//   console.log('END');
// });

// app.use((ctx, next) => {
//   console.log(2);
//   next();
// });

// app.use((ctx) => {
//   ctx.body = 'hello world';
// });

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});

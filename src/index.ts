// NPM imports
import express from 'express';
import bodyParser from 'body-parser';
import Http from 'http';

// import redisAdapter from 'socket.io-redis'
// Application imports
import config from './config';
import initialize from './initializer';
import categoryRoute from './routes/category.route';
import questionRoute from './routes/question.route';

// Intializations
const app = express();
const http = Http.createServer(app);

app.all('/*', (req, res, next) => {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*'); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header(
    'Access-Control-Allow-Headers',
    'Content-type,Accept,X-Access-Token,X-Key'
  );
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});

// parse application/json
app.use(bodyParser.json());


// To avoid client to know about express
app.disable('x-powered-by');

initialize(config)
  .then(_ => {
    app.set('mongoDb', config.mongoDbName);

    app.get('/healthcheck', (req, res) => {
      res.json('OK');
    });

    app.use('/category', categoryRoute());
    app.use('/question', questionRoute());

    app.use((err: any, req: any, res: any, next: (err?: any) => void) => {
      if (!err) return next();
      if (err.data) err = err.data;
      else if (err.message) err = err.message;
      return res.status(400).json({ error: err });
    });

    exports.server = http.listen(process.env.PORT || config.port, () => {
      console.log(`Started on port ${config.port}`);
    });
  })
  .catch(err => {
    console.error('Failed to Initialize:', err);
    process.exit(3);
  });

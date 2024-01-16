   const express = require('express');
   const router = express.Router();
   const metrics = require('./metrics');
   const client = require('prom-client');

   router.get('/metrics', async (req, res) => {
     res.set('Content-Type', client.register.contentType);
     res.end(await client.register.metrics());
   });

   module.exports = router;


//    const express = require('express');
// const router = express.Router();
// const metrics = require('./metrics'); // Assuming your metrics logic is in metrics.js
// const client = require('prom-client');

// // Middleware to measure request duration
// router.use((req, res, next) => {
//   const end = metrics.httpRequestDurationMicroseconds.startTimer();
  
//   res.on('finish', () => {
//     end({ route: req.route.path, method: req.method, code: res.statusCode });
//   });

//   next();
// });

// // Metrics endpoint
// router.get('/metrics', async (req, res) => {
//   res.set('Content-Type', client.register.contentType);
//   res.end(await client.register.metrics());
// });

// // Default route for the root path
// router.get('/', (req, res) => {
//   res.send('Hello, this is the root of your application!');
// });

// // Your other routes go here

// module.exports = router;

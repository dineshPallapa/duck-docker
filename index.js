const express = require('express');
const redis = require('redis');
const process = require('process');


const app = express()

const redisClient = redis.createClient({
  host : 'redis-server',
  port : 6379
});

redisClient.set('visits', 0);
redisClient.set('language','nodejs')


app.get('/', (req, res) => {
  process.exit(0)
  redisClient.get('visits', (err, visits) => {
  res.send('Number of visits is ' + visits);
  redisClient.set('visits', parseInt(visits) + 1)
  });
})

const server = app.listen(8081, () => {
  let host = server.address().address
  let port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})

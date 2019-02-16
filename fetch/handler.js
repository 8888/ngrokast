'use strict';

const aws = require('aws-sdk');
const secrets = require('../secrets.json');

module.exports.fetch = (event, context, callback) => {
  const s3 = new aws.S3();
  const params = {
    Bucket: secrets.bucket,
    Key: 'url'
  };
  let response = {headers: {'Access-Control-Allow-Origin': '*'}};

  s3.getObject(params, (err, data) => {
    if (err) {
      response.statusCode = 500;
      response.body = JSON.stringify({message: 'url fetch failed'});
    } else {
      response.statusCode = 200;
      response.body = JSON.stringify({url: data.Body.toString('ascii')});
    }

    callback(null, response);
  });
};

'use strict';

const aws = require('aws-sdk');
const secrets = require('../secrets.json');

module.exports.broadcast = (event, context, callback) => {
  let response = {headers:{'Access-Control-Allow-Origin': '*'}};
  let url;

  try {
    // http request
    const payload = JSON.parse(event.body);
    url = payload.url;
  }
  catch(error) {
    // local invocation or through aws console
    url = event.url;
  }

  if (url) {
    const s3 = new aws.S3();
    const params = {
      Body: url,
      Bucket: secrets.bucket,
      Key: 'url'
    };
    s3.putObject(params, (err, data) => {
      if (err) {
        response.statusCode = 500;
        response.body = JSON.stringify({url, message: 'upload to S3 failed'});
      }
      else {
        response.statusCode = 200;
        response.body = JSON.stringify({url, message: 'url successfully broadcasted'});
      }
      callback(null, response);
    });
  } else {
    response.statusCode = 400;
    response.body = JSON.stringify({event, message: 'no url provided'});
    callback(null, response);
  }
};

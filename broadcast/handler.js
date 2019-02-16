'use strict';

const s3 = require('./awsS3');

module.exports.broadcast = (event, context, callback) => {
  let url,
      statusCode,
      body;

  try {
    const payload = JSON.parse(event.body);
    url = payload.url;
  }
  catch(error) {
    url = event.url;
  }

  if (url) {
    try {
      s3.upload(url);
      statusCode = 200;
      body = JSON.stringify({url, message: 'url successfully broadcasted'});
    }
    catch(error) {
      statusCode = 500;
      body = JSON.stringify({url, message: 'upload to S3 failed'});
    }
  } else {
    statusCode = 400;
    body = JSON.stringify({event, message: 'no url provided'});
  }

  const response = {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body,
  };

  callback(null, response);
};

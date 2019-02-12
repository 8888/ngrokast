'use strict';

module.exports.fetch = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      url: 'http://example.com',
    }),
  };

  callback(null, response);
};

module.exports.broadcast = (event, context, callback) => {
  const url = event.url;
  let statusCode,
      body;

  if (url) {
    statusCode = 200;
    body = JSON.stringify({url});
  } else {
    statusCode = 400;
    body = JSON.stringify({url: '', message: 'no url provided'})
  }

  const response = {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body,
  };

  callback(null, response);
}

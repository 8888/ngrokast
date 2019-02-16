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

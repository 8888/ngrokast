'use strict';

const aws = require('aws-sdk');
const secrets = require('../secrets.json');

module.exports.upload = (url) => {
  const s3 = new aws.S3();
  const params = {
    Body: url,
    Bucket: secrets.bucket,
    Key: 'url'
  };
  s3.putObject(params, (err, data) => {
    if (err) console.log(err);
    else console.log(data);
  });
};

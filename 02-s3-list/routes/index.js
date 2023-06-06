var express = require('express');
var router = express.Router();

const AWS = require('aws-sdk')
const s3 = new AWS.S3();

/* GET home page. */
router.get('/', function(req, res, next) {
  var params = {
    Bucket: process.env.BUCKET_NAME, /* required */
  };
  s3.listObjects(params, function(err, data) {
    if (err) throw (err)

    const items = data.Contents.map((item) => item.Key)

    res.render('index', { title: 'S3 list', items: items });
  });


});

module.exports = router;

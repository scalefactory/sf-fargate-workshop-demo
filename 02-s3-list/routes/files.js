var express = require('express');
var router = express.Router();

const AWS = require('aws-sdk')
const s3 = new AWS.S3();

/* GET home page. */
router.get('/:file', function(req, res, next) {
  console.log(req.params)
  var params = {
    Bucket: 'sf-fargate-workshop-demo',
    Key: req.params.file
  };

  s3.getObject(params, function(err, data) {
    if (err) throw (err)

    res.render('files', {
      title: 'S3 getObject',
      file: req.params.file,
      fileContents: data.Body
    });
  });


});

module.exports = router;

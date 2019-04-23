const express = require('express')
const app = express()
const AWS = require('aws-sdk')
const mysql = require('mysql2')
const port = 80;

const region = 'eu-west-1';
const databasePort = 3306;
const databaseUsername = 'fargate';
const databaseName = 'workshop';
const databaseEndpoint = process.env.RDS_ENDPOINT;

app.get('/', (req, res) => {
    const signer = new AWS.RDS.Signer({ // uses the IAM role access keys to create an authentication token
        region: region,
        hostname: databaseEndpoint,
        port: databasePort,
        username: databaseUsername
    })

    signer.getAuthToken({}, function(err, token) {
        if (err) {
            console.log({err})
        } else {
            console.log({token})
            var connection = mysql.createConnection({
                host: databaseEndpoint,
                port: databasePort,
                user: databaseUsername,
                password: token,
                database: databaseName,
                ssl: 'Amazon RDS',
                authSwitchHandler: function (data, cb) { // modifies the authentication handler
                    if (data.pluginName === 'mysql_clear_password') { // authentication token is sent in clear text but connection uses SSL encryption
                        cb(null, Buffer.from(token + '\0'));
                    }
                }
            });

            connection.connect(function (err) {
                if (err) {
                    console.error('Database connection failed: ' + err.stack);
                    return;
                }

                console.log('Connected to database.');

                connection.query('SELECT * FROM workshop.demo', function (err, results) {
                    connection.end();

                    res.send({ results })
                })
            })
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

# Scale Factory Fargate workshop demo

This repository contains 2 applications for the fargate workshop demo.

### Hello world

A basic NodeJS express application to print 'Hello World!'

You can build this application using the following command.

```sh
docker build -t hello-world -f hello-world/Dockerfile .
```

### MySQL Demo

A NodeJS express application to print the contents of an RDS table using IAM
based authentication.

You can build this application using the following command.

```sh
docker build -t mysql-demo -f mysql-demo/Dockerfile .
```

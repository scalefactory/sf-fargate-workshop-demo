# The Scale Factory Fargate training workshop code

This repository contains 2 applications for the fargate workshop demo.

### Hello world

A NodeJS express application to print 'Hello World!'

Build this image by running

```sh
docker build -t sf-fargate-workshop-demo:hello-world -f 01-hello-world/Dockerfile 01-hello-world
```

### S3 List

A NodeJS express application to list the contents of a bucket and print the contents of files

_Note_: This container requires permissions to read the `sf-fargate-workshop-demo` bucket.

Build this image by running

```sh
docker build -t sf-fargate-workshop-demo:s3-list -f 02-s3-list/Dockerfile 02-s3-list
```

These images can be pushed to the workshop ECR by running

```sh
$(aws --profile sf-workshop ecr get-login --no-include-email --region eu-west-1)
docker tag sf-fargate-workshop-demo:hello-world 374061437266.dkr.ecr.eu-west-1.amazonaws.com/sf-fargate-workshop-demo:hello-world
docker tag sf-fargate-workshop-demo:s3-list 374061437266.dkr.ecr.eu-west-1.amazonaws.com/sf-fargate-workshop-demo:s3-list
docker push 374061437266.dkr.ecr.eu-west-1.amazonaws.com/sf-fargate-workshop-demo:hello-world
docker push 374061437266.dkr.ecr.eu-west-1.amazonaws.com/sf-fargate-workshop-demo:s3-list
```

### Development

Run `npm install` inside both of the applications

```sh
docker-compose up
```

Access the applications at http://localhost:8080 and http://localhost8081

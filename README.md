# The Scale Factory Fargate training workshop code

This is an open source project published by The Scale Factory.

We currently consider this project to be adopted.

These are projects that we actively invest in because we or our customers find
them useful on a day to day basis. We keep them security patched and ready for
use in production environments.

We’ll take a look at any issues or PRs you open and get back to you as soon as
we can. We don’t offer any formal SLA, but we’ll be checking on this project
periodically.

If your issue is urgent, you can flag it as such, and we’ll attempt to triage
appropriately, but we have paying customers who also have demands on our time.
If your business depends on this project and you have an urgent problem, then
you can talk to our sales team about paying us to support you.

This repository contains 2 applications for the fargate workshop demo.

### Hello world

A NodeJS express application to print 'Hello World!'

Build this image by running

```sh
docker build -t sf-fargate-workshop-hello-world:latest -f 01-hello-world/Dockerfile 01-hello-world
```

### S3 List

A NodeJS express application to list the contents of a bucket and print the contents of files

_Note_: This container requires permissions to read the `sf-fargate-workshop-demo` bucket.

Build this image by running

```sh
docker build -t sf-fargate-workshop-s3-list:latest -f 02-s3-list/Dockerfile 02-s3-list
```

These images can be pushed to the public ECR by running

```sh
$(aws ecr get-login --no-include-email --region eu-west-1)
docker tag sf-fargate-workshop-hello-world:latest 374061437266.dkr.ecr.eu-west-1.amazonaws.com/sf-fargate-workshop-hello-world:latest
docker tag sf-fargate-workshop-s3-list:latest 374061437266.dkr.ecr.eu-west-1.amazonaws.com/sf-fargate-workshop-s3-list:latest
docker push 374061437266.dkr.ecr.eu-west-1.amazonaws.com/sf-fargate-workshop-hello-world:latest
docker push 374061437266.dkr.ecr.eu-west-1.amazonaws.com/sf-fargate-workshop-s3-list:latest
```

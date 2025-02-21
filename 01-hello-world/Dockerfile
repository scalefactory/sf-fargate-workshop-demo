FROM docker.io/library/node:23-alpine as builder
WORKDIR /home/node/app
COPY ["package.json", "package-lock.json", "./"]
RUN ["npm", "install"]
COPY ["public", "./public/"]
COPY ["routes", "./routes/"]
COPY ["views", "./views/"]
COPY ["bin", "./bin/"]
COPY ["app.js", "./"]

FROM docker.io/library/node:23-alpine
WORKDIR /home/node/app
COPY --from=builder /home/node/app ./
EXPOSE 80/tcp

LABEL org.opencontainers.image.vendor="The Scale Factory"

CMD npm start

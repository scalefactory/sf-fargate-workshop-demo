FROM node:10.15.3-alpine

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source
COPY . .

# Set bucket name (to replace)
ENV BUCKET_NAME=replace_me

EXPOSE 80/tcp

CMD npm start

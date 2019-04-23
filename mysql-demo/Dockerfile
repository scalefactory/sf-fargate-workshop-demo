FROM node:10.15.3-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source
COPY . .

EXPOSE 80/tcp

CMD npm run start-mysql-demo

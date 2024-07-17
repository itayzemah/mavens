# Use small base image with nodejs 10
FROM node:latest

# set current work dir
WORKDIR /usr/src/app

# Install nodemon
RUN npm i -g nodemon

# Copy package.json, packge-lock.json into current dir
COPY package.json ./

# install dependencies
RUN npm i

# copy sources
COPY src ./src

# open default port
EXPOSE 8080 9229

# Run app
CMD ["npm", "run", "watch"]
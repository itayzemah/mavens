# Use small base image with nodejs 10
FROM node:18-alpine3.15

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

# copy prisma schema
COPY prisma ./prisma

# open default port
EXPOSE 8080 9229

RUN npx prisma generate

# Run app
CMD ["npm", "run", "dev"]
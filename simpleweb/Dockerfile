#Specify a base image:
FROM node:alpine

WORKDIR /usr/app

#install deps
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Default command
CMD ["npm", "start"]

# docker run -p 8080:8080 test/simpleweb
#Use en existing docker  as a base
FROM alpine

#Download and install dependency
RUN apk add --update gcc
RUN apk add --update redis

#What to do when it starts
CMD ["redis-server"]

#docker build -t test/redis:latest .
#docker run test/redis
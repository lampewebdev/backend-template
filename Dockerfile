FROM node:current-alpine
RUN apk add yarn
ADD . /app
WORKDIR /app
RUN yarn
RUN yarn build:production
RUN node dest/index.js
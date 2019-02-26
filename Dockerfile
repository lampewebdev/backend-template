FROM node:current-alpine
RUN apk add yarn
RUN addgroup -S app && adduser -S -G app app
USER app
ADD . /app
WORKDIR /app
RUN yarn
RUN yarn build:production
RUN node dist/main.js
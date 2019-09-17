FROM node:latest

RUN npm install express

WORKDIR /app
ADD server.js /app/server.js

CMD node server.js

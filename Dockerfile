FROM node:latest

WORKDIR /app

COPY server.js /app/server.js

RUN npm install express

CMD ["node", "server.js"]

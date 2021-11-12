FROM node:slim

RUN mkdir /app

COPY * /app

EXPOSE 3000
WORKDIR /app


RUN npm install
ENTRYPOINT [ "node", "index.js" ]

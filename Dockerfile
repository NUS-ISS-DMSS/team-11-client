FROM node:latest

WORKDIR /usr/client/src/app

COPY client/package.json ./

RUN npm install

COPY client/src/ ./src/

EXPOSE 4000
CMD [ "node", "src/index.js" ]
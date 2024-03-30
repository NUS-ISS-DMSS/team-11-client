FROM node:latest

WORKDIR /usr/client/src/

COPY client/package.json ./

RUN npm install

COPY client/ ./

EXPOSE 4000
CMD [ "node", "src/index.js" ]
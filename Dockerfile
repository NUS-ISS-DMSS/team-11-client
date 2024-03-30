FROM node:latest

WORKDIR /usr/client/

COPY client/package.json ./

RUN npm install

COPY client/ ./

EXPOSE 4000
CMD [ "node", "src/index.js" ]
FROM node:latest

WORKDIR /usr/client/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4000
CMD [ "node", "index.js" ]
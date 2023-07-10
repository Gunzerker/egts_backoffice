FROM node:16-alpine

WORKDIR /backoffice

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3002

CMD yarn dev
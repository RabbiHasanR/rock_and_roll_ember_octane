FROM node:latest

WORKDIR /rarwe

COPY . .
RUN npm install

RUN npm run build

EXPOSE 4200

CMD [ "npm", "start" ]

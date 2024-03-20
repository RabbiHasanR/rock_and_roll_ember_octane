FROM node:20-alpine

WORKDIR /rarwe

COPY package*.json .

RUN npm install

COPY . .


RUN npm run build

EXPOSE 4200

CMD [ "npm", "start" ]

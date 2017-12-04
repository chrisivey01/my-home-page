FROM node:boron

WORKDIR /usr/src/app

COPY package.json .
#COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 80:80
CMD [ "npm", "start" ]

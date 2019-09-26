FROM node:10.4
WORKDIR /usr/cricketalpha-server

COPY package.json ./
RUN npm install
COPY . .


CMD ["npm","run","start"]
FROM node:10.4
WORKDIR /usr/cricketalpha-client

COPY package.json ./
RUN npm install
COPY . .


CMD ["npm","run","start"]
FROM node:14-alpine

WORKDIR /app

ADD node_modules.tar.gz .
# COPY package.json .
# COPY package-lock.json .

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]

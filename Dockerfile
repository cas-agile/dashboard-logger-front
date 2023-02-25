FROM node:16

ENV TZ=Europe/Rome
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /cas-dashboard

COPY package*.json ./
RUN ["npm", "install", "--force"]

COPY . .
RUN ["npm", "run", "build"]

CMD ["npm", "start"]

FROM node:16

ENV TZ=Europe/Rome
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /cas-dashboard

ARG PUBLIC_URL
ARG LOGGER_URL
ARG GITLAB_URL
ARG TAIGA_URL
ARG MATTERMOST_URL
ARG SONARQUBE_URL
ENV PUBLIC_URL                  $PUBLIC_URL
ENV REACT_APP_LOGGER_URL        $LOGGER_URL
ENV REACT_APP_GITLAB_URL        $GITLAB_URL
ENV REACT_APP_TAIGA_URL         $TAIGA_URL
ENV REACT_APP_MATTERMOST_URL    $MATTERMOST_URL
ENV REACT_APP_SONARQUBE_URL     $SONARQUBE_URL

COPY package*.json ./
RUN ["npm", "install", "--force"]

COPY . .
RUN ["npm", "run", "build"]

CMD ["npm", "start"]

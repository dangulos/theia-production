ARG NODE_VERSION=10
FROM node:${NODE_VERSION}-alpine
RUN apk add --no-cache make gcc g++ python
ARG version=latest
#WORKDIR /root/.yalc/packages/itrmext
#COPY ./theia-production/.yalc/itrmext ./
WORKDIR /home/theia/theia-production/files
COPY ./itrmext ./
RUN yarn global add yalc && \
    yarn && \
    yarn run prepare && \
    yalc publish
WORKDIR /home/theia/theia-production
COPY ./theia-production/package.json  ./theia-production/exec.sh ./
COPY ./theia-production/Server ./Server
RUN rm -rf files
RUN yalc add "itrmext" && \
    npm i -g pm2
RUN yarn --pure-lockfile && \
    NODE_OPTIONS="--max_old_space_size=4096" yarn theia build && \
    yarn theia download:plugins && \
    yarn --production && \
    yarn autoclean --init && \
    echo *.ts >> .yarnclean && \
    echo *.ts.map >> .yarnclean && \
    echo *.spec.* >> .yarnclean && \
    yarn autoclean --force && \
    yarn cache clean
RUN apk add --no-cache git openssh bash
EXPOSE 3000
EXPOSE 420
ENV SHELL=/bin/bash \
    THEIA_DEFAULT_PLUGINS=local-dir:/home/theia/theia-production/plugins
ENV USE_LOCAL_GIT true
ENTRYPOINT ["./exec.sh"]
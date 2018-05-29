FROM node:9-alpine
ARG COMMIT=local
ARG TAG=local
ENV COMMIT ${COMMIT}
ENV TAG ${TAG}
RUN mkdir -p /root/src
RUN mkdir -p /root/public
RUN mkdir -p /root/scripts
RUN mkdir -p /root/config
RUN mkdir -p /root/jest
COPY ./src /root/src
COPY ./public /root/public
COPY ./scripts /root/scripts
COPY ./config /root/config
COPY ./jest /root/jest
COPY ./package.json /root/package.json
WORKDIR /root
RUN yarn
EXPOSE 3000
ENTRYPOINT ["yarn","run", "serve"]

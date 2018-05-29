FROM node:9-alpine
ARG COMMIT=local
ARG TAG=local
ENV COMMIT ${COMMIT}
ENV TAG ${TAG}
RUN mkdir -p /root/src
COPY ./src /root/src
COPY ./package.json /root/package.json
COPY ./.babelrc /root/.babelrc
WORKDIR /root
RUN yarn
RUN yarn run build
EXPOSE 8080
ENTRYPOINT ["yarn","run", "start-prod"]

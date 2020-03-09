
FROM node:9.5

ENV DEBUG="users:*" 
ENV PORT="3333" 
ENV SEQUELIZE_CONNECT="sequelize-docker-mysql.yaml" 
ENV REST_LISTEN="0.0.0.0" 
 
RUN mkdir -p /userauth
COPY package.json sequelize-docker-mysql.yaml *.mjs *.js /userauth/
WORKDIR /userauth
RUN apt-get update -y
RUN apt-get -y install curl python
RUN apt-get -y install build-essential
RUN apt-get -y install git ca-certificates
# RUN npm install cnpm -g
RUN npm install --unsafe-perm
# RUN ./node_modules/.bin/nsp check
 
EXPOSE 3333 
CMD npm run docker 

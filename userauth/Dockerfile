# docker-compose build userauth
FROM node:12.13.0

ENV DEBUG="users:*" 
ENV PORT="3333" 
ENV SEQUELIZE_CONNECT="sequelize-docker-mysql.yaml" 
ENV REST_LISTEN="0.0.0.0" 
 
RUN mkdir -p /userauth
COPY package.json sequelize-docker-mysql.yaml *.mjs *.js /userauth/
WORKDIR /userauth

# #备份旧的配置文件
# RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak
# #替换为我们自定义的配置文件
# COPY sources.list /etc/apt/

RUN apt-get update -y
RUN apt-get -y install curl python
RUN apt-get -y install build-essential
RUN apt-get -y install git ca-certificates
# RUN npm install cnpm -g
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install 
RUN npm install 
#--unsafe-perm
# RUN ./node_modules/.bin/nsp check
 
EXPOSE 3333 
CMD npm run docker 

FROM node:12.13.0
 
ENV DEBUG="notes:*,messages:*" 
ENV SEQUELIZE_CONNECT="models/sequelize-docker-mysql.yaml" 
ENV NOTES_MODEL="sequelize" 
ENV USER_SERVICE_URL="http://userauth:3333" 
ENV PORT="3000" 
ENV NOTES_SESSIONS_DIR="/sessions"
# Use this line when the Twitter Callback URL
# has to be other than localhost:3000
ENV TWITTER_CALLBACK_HOST=evsoul.com

#备份旧的配置文件
RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak
#替换为我们自定义的配置文件
COPY sources.list /etc/apt/

RUN apt-get update -y
RUN apt-get -y install curl  
RUN apt-get -y install python 
RUN apt-get -y install build-essential 
RUN apt-get -y install git 
RUN apt-get -y install ca-certificates
RUN apt-get -y install sqlite3

RUN mkdir -p /notesapp /notesapp/minty /notesapp/partials /notesapp/public /notesapp/routes /notesapp/theme /notesapp/views
COPY minty/ /notesapp/minty/
COPY models/*.mjs models/*.sql models/sequelize-docker-mysql.yaml /notesapp/models/
COPY partials/ /notesapp/partials/
COPY public/ /notesapp/public/
COPY routes/ /notesapp/routes/
COPY theme/ /notesapp/theme/
COPY views/ /notesapp/views/
COPY dirname.js app.mjs  package.json /notesapp/

WORKDIR /notesapp
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install --unsafe-perm
# RUN ./node_modules/.bin/nsp check

# Uncomment to build the theme directory
# WORKDIR /notesapp/theme
# RUN npm run download && npm run build && npm run clean

WORKDIR /notesapp

VOLUME /sessions 
EXPOSE 3000 
CMD node --experimental-modules ./app

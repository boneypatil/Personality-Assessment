FROM node:9.11.2-alpine
RUN apk --update add curl

LABEL authors="Yash <yashsharma205@gmail.com>"

RUN mkdir /www
WORKDIR /www

COPY ["./package.json", "tsconfig.json", "./"]
RUN npm install

COPY src ./src
RUN npm -s run build
RUN rm -rf /www/src

EXPOSE  8086

CMD ["npm", "start"]

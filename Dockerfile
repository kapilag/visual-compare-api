FROM ubuntu:15.04


#install Node.js and npm
RUN apt-get update
RUN apt-get -y install nodejs
RUN apt-get install -y npm
RUN apt-get install -y libcairo2-dev
RUN apt-get install -y graphicsmagick

RUN ln -s /usr/bin/nodejs /usr/bin/node

RUN apt-get -y install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++

ADD . /resemble-api

RUN cd /resemble-api; npm install



EXPOSE  3000
CMD ["node", "/resemble-api/bin/www"]

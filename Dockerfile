FROM mcr.microsoft.com/playwright:bionic

COPY . /test

RUN cd /test && npm install

WORKDIR /test
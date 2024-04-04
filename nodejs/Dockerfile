FROM node:18

WORKDIR /usr/src/app

ENV DOCKERIZE_VERSION v0.7.0

# copy the package.json files from local machine to the workdir in container
COPY package*.json ./

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm install express
RUN npm install ejs

# copy the generated modules and all other files to the container
COPY . .

EXPOSE 5000

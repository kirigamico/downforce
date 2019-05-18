FROM node:8

RUN npm install -g yarn gulp-cli

RUN mkdir -p /app /node_cache/node_modules

# Install dependencies
WORKDIR /node_cache
COPY package.json yarn.lock ./
RUN yarn install

WORKDIR /app/website
COPY website/package.json website/yarn.lock ./
RUN yarn install

WORKDIR /app
COPY . /app

CMD ["yarn", "start"]

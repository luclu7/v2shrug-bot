FROM node:14

WORKDIR /app

COPY ["package.json", "package-lock.json", "index.js", "./"]

RUN npm install

CMD ["node", "index.js"]
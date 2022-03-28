FROM node:17-alpine
WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "/usr/src/app/"]
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "./dist/main.js"]
# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .
<<<<<<< Updated upstream
RUN yarn install --production
CMD ["node", "src/App.js"]
=======

CMD [ "node", "App.js" ]
>>>>>>> Stashed changes

FROM node:14.16-slim
#FROM arm32v7/node:14-alpine

WORKDIR /usr/src/app
COPY ./app/ .
RUN npm ci

EXPOSE 4040
CMD [ "node", "--max_old_space_size=1048576", "app.js" ]

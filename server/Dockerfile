# Base image
FROM node:19.7-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
CMD npm run dev
FROM node:16.14.2
WORKDIR /app-fe
COPY package.json .
RUN npm install
COPY . .
COPY .env.deploy .env
CMD ["npm", "start"]
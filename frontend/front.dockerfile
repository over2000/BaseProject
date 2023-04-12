FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:latest
WORKDIR /app
COPY --from=build /app/build /app
CMD ["npm", "start"]
FROM node:22-alpine

WORKDIR /app
COPY . .
RUN npm install -g yarn
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
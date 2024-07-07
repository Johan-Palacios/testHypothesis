FROM node:18.17.1-alpine as builder

RUN mkdir -p /home/app/frontend

WORKDIR /home/app/frontend

COPY ./package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.27.0-alpine

EXPOSE 3000

COPY ./clientNginx/default.conf /etc/nginx/conf.d/default.conf

RUN chmod 444 /etc/nginx/conf.d/default.conf

COPY --from=builder /home/app/frontend/dist /usr/share/nginx/html

FROM node:18.17.1

RUN mkdir -p /home/app/frontend

WORKDIR /home/app/frontend

COPY package*.json ./

RUN npm ci

EXPOSE 5173

CMD ["npm", "run", "devdocker"]

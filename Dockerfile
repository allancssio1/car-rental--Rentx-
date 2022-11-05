# de onde vem
FROM node

#para onde vai a imagem pasta
WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 3333

CMD ["npm", "run", "dev"]
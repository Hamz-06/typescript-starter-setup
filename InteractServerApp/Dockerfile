#docker build -t detect_token:latest .
#docker run -p 2000:2000 detect_token:latest
#  docker-compose up --build my-server 
FROM node:20.9


WORKDIR /AuthServiceApp

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000

EXPOSE 3000

ARG ENVIROMENT_STAGE="development"

CMD npm run $ENVIROMENT_STAGE

# CMD ["npm", "run", $ENVIROMENT_STAGE]


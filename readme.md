# express, typescript, JWT auth, kafka, docker compose and kubernetes 

- Eslint config and typescript config 
- Express server, typescript
- dev, prod environments
- Docker compose for zookeeper and kafka services run only one command to get started
- Simple JWT auth
- Kafka producer and consumer, send message to kafka topic and consume message from kafka topic


# Set up to test locally using docker compose
To get started, rename the .env.example file to .env.development or .env.production

To run the app in development mode, run the following command 

```bash
ENVIROMENT_STAGE=development docker compose --env-file .env.development up --build
```

## WHAT DOES THIS DO? 

Two folders are in src directory 

- InteractServerApp
Generate JWT auth by sending a post request to
This will send a cookie to your browser with the JWT token
http://localhost:3000/otp/generate-otp 

You can then invoke kafka endpoint by sending a get request to this endpoint
http://localhost:3000/kafka/invoke

This folder also has a producer that will send a message to the kafka topic (rider-topic) 

- KafkaServerApp
This contains the kafka consumer that will consume the message sent by the producer in the InteractServerApp folder and log it to the console

# Move to cloud using terraform and kubernetes




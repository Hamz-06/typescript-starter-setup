# simple typescript and express application

- Eslint config and typescript config 
- Express server with typescript
- Nodemon enabled for development# typescript-starter-setup


# Set up zoo keeper

- replace ip with your ip address

docker run -p 2181:2181 zookeeper

```bash
    docker run -p 9092:9092 \
    -e KAFKA_ZOOKEEPER_CONNECT=<ip>:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<ip>:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka
```
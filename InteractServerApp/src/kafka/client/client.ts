// const { Kafka } = require("kafkajs");
import { Kafka } from "kafkajs";

export const kafka = new Kafka({
    clientId: "my-app",
    brokers: [`${process.env.IP_ADDRESS}:9092`],
});




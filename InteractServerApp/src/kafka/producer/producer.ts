
// npm run any dist/kafka/producer/producer
import { kafka } from "@kafka/client/client.js";
import { Partitioners } from "kafkajs";

// run a producer to send messages to the kafka broker 10 times
export default async function init() {
    const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

    console.log("Connecting Producer");
    try {
        await producer.connect();

    } catch (e) {
        throw new Error(`Producer Connection Error`);
    }

    console.log("Producer Connected Successfully");

    async function produceMessage() {
        const randomLat = Math.random() * 100;
        const randomLang = Math.random() * 100;
        console.log('sending message')
        console.log(randomLat, randomLang)
        try {
            await producer.send({
                topic: "rider-updates",
                messages: [{
                    key: "location-update",
                    value: JSON.stringify({ name: 'James May', location: { lat: randomLat, lng: randomLang } }),
                }],
            });
        } catch (error) {
            console.log(error)
        }
    }

    await produceMessage()
}

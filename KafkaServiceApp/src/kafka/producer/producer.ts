
// npm run any dist/kafka/producer/producer
import { kafka } from "@kafka/client/client.js";
import { Partitioners } from "kafkajs";

async function init() {
    const producer = kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });

    console.log("Connecting Producer");
    await producer.connect();
    console.log("Producer Connected Successfully");

    async function produceMessage() {
        const randomLat = Math.random() * 100;
        const randomLang = Math.random() * 100;

        await producer.send({
            topic: "rider-updates",
            messages: [{
                partition: 1,
                key: "location-update",
                value: JSON.stringify({ name: 'James May', location: { lat: randomLat, lng: randomLang } }),
            }],
        });
    }

    const intervalId = setInterval(async () => {
        await produceMessage();
    }, 1000);


    setTimeout(async () => {
        clearInterval(intervalId); // Stop the interval
        console.log("Producer Disconnected Successfully");
        await producer.disconnect();
    }, 10000);




}

init();
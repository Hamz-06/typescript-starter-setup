import { kafka } from "@kafka/client/client.js";



async function init() {
    const consumer = kafka.consumer({ groupId: '0' });
    await consumer.connect();

    await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(
                `$ [${topic}]: PART:${partition}:`,
                message.value?.toString()
            );

        },
    });
}

init();
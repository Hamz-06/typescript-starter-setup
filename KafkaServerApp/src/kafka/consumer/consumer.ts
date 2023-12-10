import { kafka } from "@kafka/client/client.js";



export default async function init() {


    try {
        const consumer = kafka.consumer({ groupId: '0' });
        await consumer.connect();

        await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

        console.log("Consumer Connected Successfully");

        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                console.log(`[${topic}] 
                    PART:${partition} 
                    message:${message.value?.toString()} 
                    key:${message.key?.toString()}`,
                );
            },
        });

    } catch (error) {
        console.log('error could not connect to kafka consumer')
    }
}


import { Kafka } from "kafkajs"

class BaseWorker {
    private static kafkaClient: Kafka | null = null

    constructor() {
        console.log('invoked base worker class')
    }

    /**
     * Singleton pattern for Kafka client
     */
    async getKafkaClient(): Promise<Kafka> {
        if (BaseWorker.kafkaClient) {
            return BaseWorker.kafkaClient
        }

        try {
            const kafkaClient = new Kafka({
                clientId: process.env.KAFKA_CLIENT ?? 'default-client', // check null or undefined, whereas || checks all falsy values
                brokers: ["localhost:9092"],
            });
            BaseWorker.kafkaClient = kafkaClient
            return kafkaClient
        } catch (err: any) {
            console.error(`Failed to create Kafka client: ${err.message}`)
            throw err
        }
    }

    getTopicName() {
        return process.env.KAFKA_TOPIC ?? 'default-topic'
    }

    getGroupId() {
        return process.env.KAFKA_GROUP_ID ?? 'default-group-id'
    }
}

export default BaseWorker;

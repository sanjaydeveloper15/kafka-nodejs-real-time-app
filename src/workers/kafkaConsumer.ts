import { Consumer, EachMessagePayload, Kafka } from "kafkajs";
import BaseWorker from "./baseClass";
import { catchExeception } from "../utils/helpers";

class KafkaConsumer extends BaseWorker {

    constructor() {
        super()
        console.log(`invoked kafka consumer`)
    }

    async invoke(): Promise<void> {
        try {
            const kafka: Kafka = await this.getKafkaClient()
            const consumer: Consumer = kafka.consumer({ groupId: this.getGroupId() })

            await consumer.connect()
            await consumer.subscribe({ topic: this.getTopicName(), fromBeginning: true })

            await consumer.run({
                eachMessage: async ({ topic, partition, message }: EachMessagePayload): Promise<void> => {
                    const bodyObj: string | undefined = message.value?.toString()
                    console.log({
                        value: bodyObj ? JSON.parse(bodyObj) : '',
                        partition: partition,
                        topic: topic
                    })
                },
            })
        } catch (err: unknown) {
            catchExeception(err);
            throw err;
        }
    }
}

export default KafkaConsumer
import BaseWorker from "./baseClass";

class KafkaConsumer extends BaseWorker {

    constructor() {
        super()
        console.log(`invoked kafka consumer`)
    }

    async invoke() {
        try {
        const kafka = await this.getKafkaClient()
        const consumer = kafka.consumer({ groupId: this.getGroupId() })

        await consumer.connect()
        await consumer.subscribe({topic: this.getTopicName(), fromBeginning: true})
        
        await consumer.run({
            eachMessage: async ({ topic, partition, message }) => {
                const bodyObj: any = message.value?.toString()
                console.log({
                    value: JSON.parse(bodyObj),
                    partition: partition,
                    topic: topic
                })
            },
        })
        } catch (err: any) {
            console.error(`KafkaConsumer error: ${err.message}`)
            throw err
        }
    }
}

export default KafkaConsumer
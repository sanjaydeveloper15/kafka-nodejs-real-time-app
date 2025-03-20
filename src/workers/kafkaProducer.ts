import BaseWorker from "./baseClass";

class KafkaProducer extends BaseWorker {

    constructor() {
        super()
        console.log(`invoked kafka producer`)
    }

    async invoke(bodyObj: object) {
        const kafka = await this.getKafkaClient()
        const producer = kafka.producer()

        await producer.connect()
        await producer.send({
            topic: this.getTopicName(),
            messages: [
                { value: JSON.stringify(bodyObj) },
            ],
        })

        await producer.disconnect()
    }
}

export default KafkaProducer
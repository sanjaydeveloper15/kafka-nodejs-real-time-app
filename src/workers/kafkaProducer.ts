import { Consumer, Kafka, Producer } from "kafkajs";
import { KafkaBodyObj, TextObjI } from "../types";
import BaseWorker from "./baseClass";
import { catchExeception } from "../utils/helpers";

class KafkaProducer extends BaseWorker {

    constructor() {
        super()
        console.log(`invoked kafka producer`)
    }

    async invoke(bodyObj: TextObjI): Promise<void> {
        try {
            const kafka: Kafka = await this.getKafkaClient()
            const producer: Producer = kafka.producer()

            await producer.connect()
            await producer.send({
                topic: this.getTopicName(),
                messages: [
                    { value: bodyObj ? JSON.stringify(bodyObj) : '' },
                ],
            })

            await producer.disconnect()
        } catch (err: unknown) {
            catchExeception(err)
            throw err
        }
    }
}

export default KafkaProducer
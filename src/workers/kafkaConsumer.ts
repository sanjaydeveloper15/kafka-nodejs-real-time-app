import BaseWorker from "./baseClass";

class KafkaConsumer extends BaseWorker {

    constructor() {
        super()
        console.log(`invoked kafka consumer`)
    }

    async invoke() {
        try {

        } catch (err: any) {
            console.error(`KafkaConsumer error: ${err.message}`)
            throw err
        }
    }
}

export default KafkaConsumer
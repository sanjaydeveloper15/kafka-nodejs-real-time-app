import { Request, Response } from 'express'
import KafkaProducer from '../workers/kafkaProducer'

const sendMessage:any = async (req: Request, res: Response) => {
    try {
        const textObj: any = {
            item_id: req.body.itemId || 0,
            username: "github@sanjaydeveloper15",
            message: req.body.message || 'n/a',
        };
        const kafkaProducer: any = new KafkaProducer()
        await kafkaProducer.invoke(textObj)
        return res.status(200).send({ error: false, message: 'success', data: textObj })
    } catch (err: any) {
        return res.status(500).send({ error: true, message: err.message })
    }
}


const KafkaController = {
    sendMessage
}

export default KafkaController

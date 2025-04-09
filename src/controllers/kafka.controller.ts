import { Request, Response } from 'express'
import KafkaProducer from '../workers/kafkaProducer'
import { catchExeception } from '../utils/helpers';
import { TextObjI } from '../types';

const sendMessage = async (req: Request, res: Response): Promise<Response> => {
    try {
        const textObj: TextObjI = {
            item_id: parseInt(req.body.itemId) || 0,
            username: "github@sanjaydeveloper15",
            message: (req.body.message).toString() || 'n/a',
        };
        const kafkaProducer: KafkaProducer = new KafkaProducer()
        await kafkaProducer.invoke(textObj)
        return res.status(200).send({ error: false, message: 'success', data: textObj })
    } catch (err: unknown) {
        catchExeception(err)
        return res.status(500).send({ error: true, message: err instanceof Error ? err.message : 'Uncaught error' })
    }
}


const KafkaController = {
    sendMessage
}

export default KafkaController

import { Router } from "express"
import KafkaController from "../controllers/kafka.controller"

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send({ error: false, message: `${process.env.APP_NAME}: Version 1 API's` })
})

router.post('/sendMessage', KafkaController.sendMessage)

export default router
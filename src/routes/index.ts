import { Router, Request, Response } from "express"
import KafkaController from "../controllers/kafka.controller"

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send({ error: false, message: `${process.env.APP_NAME || "UnknownApp"}: Version 1 API's` })
})

router.post('/sendMessage', KafkaController.sendMessage)

export default router
import express, { Application } from 'express';
import { configDotenv } from 'dotenv';
configDotenv();
import router from './routes';
import KafkaConsumer from './workers/kafkaConsumer';
import { catchExeception } from './utils/helpers';

const app: Application = express();
const port: number = parseInt(process.env.PORT || '1000', 10); // Default port is 1000
const KafkaConsumerClass: KafkaConsumer = new KafkaConsumer()

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.use('/api/v1', router);

// Start Express server
app.listen(port, async (): Promise<void> => {
    try {
        await KafkaConsumerClass.invoke();
        console.info(`Server listening on node port ${port}`);
    } catch (err: unknown) {
        catchExeception(err)
        throw err
    }
});

export default app;

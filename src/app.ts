import express, { Application } from 'express';
import { configDotenv } from 'dotenv';
configDotenv();
import router from './routes';
import KafkaConsumer from './workers/kafkaConsumer';

const app: Application = express();
const port: number = parseInt(process.env.PORT || '1000', 10); // Default port is 1000
const KafkaConsumerClass = new KafkaConsumer()

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

app.use('/api/v1', router);

// Start Express server
app.listen(port, async () => {
    await KafkaConsumerClass.invoke();
    console.log(`Server listening on port ${port}`);
});

export default app;

export const catchExeception = (err: unknown): void => {
    if (err instanceof Error) {
        console.error(`KafkaConsumer error: ${err.message}`)
    } else {
        console.error(`Unknown error occured: ${err}`)
    }
}
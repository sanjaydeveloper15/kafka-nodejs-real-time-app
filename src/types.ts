export interface KafkaBodyObj {
    topic: string,
    messages: string | Array<string>
}

export interface TextObjI {
    item_id: number;
    username: string;
    message: string
}
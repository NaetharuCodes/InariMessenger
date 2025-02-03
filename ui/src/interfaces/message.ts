export enum messageStatus {
    SENT = "sent",
    DELIVERED = "delivered",
    READ = "read"
}

export enum messageType {
    TEXT = "text",
    IMAGE = 'image',
    FILE = 'file'
}

export interface message {
    id: string,
    content: string,
    timeStamp: Date,
    senderId: string,
    status: messageStatus
    type: messageType
}
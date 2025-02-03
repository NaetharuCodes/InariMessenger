import { useLayoutEffect, useState } from 'react';
import { message, messageStatus, messageType } from '@/interfaces/message';
import MessageBubble from '../MessageBubble/MessageBubble';

const dummyData: message[] = [
  {
    id: '123',
    content: 'Hi and welcome to the app',
    timeStamp: new Date(),
    senderId: 'Paul',
    status: messageStatus.SENT,
    type: messageType.TEXT,
  },
  {
    id: '124',
    content: 'I hope you like it here',
    timeStamp: new Date(),
    senderId: 'Paul',
    status: messageStatus.SENT,
    type: messageType.TEXT,
  },
  {
    id: '125',
    content: 'Lots of cool things are possible',
    timeStamp: new Date(),
    senderId: 'Paul',
    status: messageStatus.SENT,
    type: messageType.TEXT,
  },
  {
    id: '126',
    content:
      'Hey Paul! Thanks for inviting me, Im really looking forward to working on this project with you',
    timeStamp: new Date(),
    senderId: 'James',
    status: messageStatus.SENT,
    type: messageType.TEXT,
  },
];

interface MessageViewerProps {}

const MessageViewer = () => {
  const [messages, setMessages] = useState<message[]>([]);

  useLayoutEffect(() => {
    setMessages(dummyData);
  }, []);

  return (
    <div>
      {messages.map((message: message) => (
        <MessageBubble text={message.content} id={message.senderId} />
      ))}
    </div>
  );
};

export default MessageViewer;

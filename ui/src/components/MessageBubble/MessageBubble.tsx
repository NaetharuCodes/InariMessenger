import { DrawerOverlay } from '@mantine/core';
import styles from './MessageBubble.module.css';

interface MessageBubbleProps {
  text: string;
  id: string;
}

const MessageBubble = ({ text, id }: MessageBubbleProps) => {
  return (
    <div className={`${styles.container} ${id === 'James' ? styles.flexSelf : styles.flexOther}`}>
      <div
        className={`${styles.bubble} ${id === 'James' ? styles.selfMessage : styles.otherMessage}`}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageBubble;

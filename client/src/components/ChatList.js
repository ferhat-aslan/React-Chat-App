import React from 'react'
import styles from './styles.module.css'
import {useChat} from "../context/ChatContext.js";
import ChatItem from './ChatItem';
import ScrollableFeed from "react-scrollable-feed";
function ChatList() {
    const {message} =useChat();
  return (
    <div className={styles.chatlist}>
<ScrollableFeed forceScroll={true}>
{message.map((item,key)=>(
            <ChatItem item={item} key={key}/>
        ))}
</ScrollableFeed>
        
        
        </div>
  );
}

export default ChatList
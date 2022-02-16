import {useState} from 'react'
import styles from "./styles.module.css"
import {sendMessage} from "../socketApi.js"
import {useChat} from "../context/ChatContext.js"
function ChatForm() {
  const {setMessage}=useChat();
  const [message,setMessages]=useState('');
  const handleSubmit =(e)=> {e.preventDefault();
    setMessage((prevState)=>[...prevState,{message,fromMe:true}])
    sendMessage(message);
  setMessages('');}
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input className={styles.textInput} value={message} onChange={(e)=>(setMessages(e.target.value))}/>
      </form>
      
    </div>
  )
}

export default ChatForm
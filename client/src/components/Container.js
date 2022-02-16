import {useEffect} from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import {useChat} from "../context/ChatContext.js"
import "../App.css"
import {init, subscribeChat, subscribeInitialMessages} from "../socketApi.js"

function Container() {
  const {setMessage}=useChat();
  useEffect(()=>{
    init();
    subscribeInitialMessages((ms)=>{setMessage(ms)})
    subscribeChat((message)=>{
      setMessage((prevstate)=>[...prevstate,{message}])
    });
  },[])
  return (
    <div className='App'>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container
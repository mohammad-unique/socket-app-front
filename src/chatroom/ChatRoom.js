import React from 'react';
import SocketIOClient from 'socket.io-client'


const ChatRoom = (props) => {

  const socket =React.useRef(SocketIOClient.connect("http://localhost:3010/socket"));

  React.useEffect(()=>{
    console.log(props.location.state)
  },[]);

  return (
    <div>
      Chat Room
    </div>
  );
};

export default ChatRoom;
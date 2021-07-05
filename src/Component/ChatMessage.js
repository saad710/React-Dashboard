import React from 'react';
import Header from './Header';
import Leftmenu from './Leftmenu';
import Message from './Message';
import MemberStatus from './MemberStatus';

const ChatMessage = () => {
    return (
       <div>
        <Header/>
        <Leftmenu/>
     
       <Message/>
      
        <MemberStatus/>
    
       </div>
    );
};

export default ChatMessage;
import React from 'react';
import Header from '../Components/Header';
import Chats from '../Components/Chats';
import _ from 'lodash';
import store from '../Store';
import './ChatWindow.css';
import MessageInput from './MessageInput';




const ChatWindow = ({activeUserId}) => {
    const state = store.getState();
    const {typing} = state;
    const activeUser = state.contacts[activeUserId]
    const activeMsgs = state.messages[activeUserId]
    return (
        <div className="ChatWindow">   
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)}/>
            <MessageInput value={typing}/>
        </div>
    )
}

export default ChatWindow;
import React from 'react';
import store from '../Store';
import {setTypingValue, sendMessage, clearChat} from '../Actions';
import './MessageInput.css';
import {Send, Image, Folder} from 'react-feather'

const MessageInput = ({value}) => {
    const state = store.getState();

    const handleChange = e => {
        store.dispatch(setTypingValue(e.target.value));
    }

    const handleSubmit = e => {
        
        e.preventDefault();
        
        const {typing, activeUserId, activeChatId} = state;

        store.dispatch(sendMessage(typing, activeUserId, activeChatId));

        //clear chatId with a reducer and what you do is compare the chat Id
        store.dispatch(clearChat());
    }

    return (
        <div className="Message-container">
            <div className="message-content">
            <Folder size={25} color={'#D1D6E6'} style={{"marginRight":"5px"}}/>
            <Image size={25} color={'#D1D6E6'}/>
        <form className="Message"
              onSubmit={handleSubmit}>
            <input
                className="Message_input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />

        </form>
        <button className="submit-button" onClick={handleSubmit}>
                <Send size={20} color={'#fff'}/>
        </button>
        </div>
        </div>
    ) 
}

export default MessageInput;
import React from 'react';
import './SideBar.css';
import User from '../Containers/User'
import {Edit3} from 'react-feather';

const SideBar = ({contacts}) => {
    return (
        <aside className="SideBar">
            <div className="chatContainer">
            <div className="chatHeader">
                <h2>All Messages</h2>
                <button className="editButton">
                <Edit3 color='white' size={20}/>
                </button>
                <input placeholder="Search Messages"/>
            </div>
            <div className="chatContacts">
            {contacts.map(contact => 
            <div className="User-container" key={contact.user_id}>
            <User user={contact}
            key={contact.user_id}/>
            </div>
            )}
            </div>
            </div>

        </aside>
    );
}

export default SideBar;
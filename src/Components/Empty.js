import React from 'react';
import './Empty.css';
import {Link, Bookmark, MoreVertical} from 'react-feather';

const Empty = ({user}) => {
    const {name, profile_pic, status} = user;
    const first_name = name.split(" ")[0];

    return (
        <div className="Empty-container">
        <div className="Empty-header">
            <div className="empty-icons">
                <div className="iconContainer">
                    <Link size={16} color={'#A3B0C7'}/>
                </div>
                <div className="iconContainer">
                    <Bookmark size={16} color={'#A3B0C7'}/>
                </div>
                <div className="iconContainer">
                    <MoreVertical size={16} color={'#A3B0C7'}/>
                </div>
            </div>
        </div>
        <div className="Empty">
            <h1 className="Empty_name">Welcome, {first_name}</h1>
            <img src={profile_pic} alt={name} className="Empty_img"/>
            <p className="Empty_status">
                <b>Status:</b> {status}
            </p>
            <button className="Empty_btn">
                Start a conversation
            </button>
            <p>
                Search for someone to start chatting with or go to Contacts to see who is available
            </p>
        </div>
        </div>

    )
}

export default Empty;
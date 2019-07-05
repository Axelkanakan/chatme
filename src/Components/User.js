import React from 'react';
import './User.css';

const User = ({user}) => {
    const {name, profile_pic, status } = user;
    return (
        <div className="User">
        <div className="User-profile">
            <img src={profile_pic} alt={name} className="User_pic"/>
        </div>
        <div className="User_details">
                <p className="User_details-name">{name}</p>
                <p className="User_details-status">{status}</p>
        </div>
        <div className="User_details_date">
            <p className="User_detail-date">Jul 18</p>
        </div>
        </div>
    )
}

export default User;
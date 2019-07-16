import React from 'react';
import './Header.css';
import {MoreVertical, Bookmark, Link} from 'react-feather';

function Header({user}){
    const {name, status, profile_pic} = user;
    return (
        <div className="Header">
            <div className="content-container">
                <div className="contact-info">
                    <div className="profile-img-container">
                        <img src={profile_pic} alt="profile"/>
                    </div>
                    <div className="info">
                        <h1>{name}</h1>
                        <p>{status}</p>
                    </div>
                </div>
                <div className="contact-icons">
                    <div className="empty-icons">
                        <div className="iconContainer Link">
                            <Link size={16} color={'#A3B0C7'}/>
                        </div>
                        <div className="iconContainer Bookmark">
                            <Bookmark size={16} color={'#A3B0C7'}/>
                        </div>
                        <div className="iconContainer MoreVertical">
                            <MoreVertical size={16} color={'#A3B0C7'}/>
                        </div>
                </div>
                </div>
            </div>
        </div>
        // <div className="Header">
        //     <div className="Header-container">
        //     <div className="activeUser-container">
        //         <div className="contact-profile-container">
        //             <div className="profile-img-container">
        //                 <img src={profile_pic} alt="profile"/>
        //             </div>
        //         </div>
        //         <div className="contact-info">
        //             <h1>{name}</h1>
        //             <p>{status}</p>
        //         </div>
        //     </div>
        //     <div className="empty-icons">
        //         <div className="iconContainer">
        //             <Link size={16} color={'#A3B0C7'}/>
        //         </div>
        //         <div className="iconContainer">
        //             <Bookmark size={16} color={'#A3B0C7'}/>
        //         </div>
        //         <div className="iconContainer">
        //             <MoreVertical size={16} color={'#A3B0C7'}/>
        //         </div>
        //     </div>
        //     </div>
        // </div>
    );
}

export default Header;
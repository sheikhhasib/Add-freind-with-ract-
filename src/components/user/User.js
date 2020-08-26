import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const User = (props) => {
    const {gender,name,phone,picture,email,dob,salary} = props.user;
    const fullName = `${name.title} ${name.first} ${name.last}`;
    
    return (
        <div className="user-content">
            <div className="user-details">
                 <h3>Name : {fullName}</h3>
                 <p>Gender : {gender}</p>
                 <p>Age : {dob.age}</p>
                <p>Email : {email} </p>
                 <p>Phone : {phone}</p>
                <p>Salary : {salary}</p>
            </div>
            <div className="user-image">
                <img src={picture.large} alt=""/><br></br>
                <button className="addFriendButton" onClick={()=> props.addFriendHandler(props.user)}> 
                <FontAwesomeIcon icon={ faUserPlus }/>  Add friend</button>
            </div>
        </div>
    );
};

export default User;
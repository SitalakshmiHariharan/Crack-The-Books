import React from 'react';


const UserList =(props) =>{
    return(
        <div>
            <br/>
            <h2> Enquiry {props.id} </h2>
            Name: {props.usrname}<br/>
            Email: {props.usremail}<br/>
            Interested In: {props.interest}
            <br/>                       
        </div>
    )
}

export default UserList;
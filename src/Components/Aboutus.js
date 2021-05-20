import React from 'react';
import About from './Aboutus.png';
import './Aboutus.css';

const Aboutus =(props)=>
{
    return(
        <div>
           <img class="displayed" src={About} alt="ABOUT US"></img>
           <p>You can know Aboutus by emailing us at {props.contact} </p>
        </div>
    )
}


export default Aboutus;
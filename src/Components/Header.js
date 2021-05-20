import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from './Logo.png';

const Header =()=>
{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src={Logo} width="40" height="40" alt = "MUSIC"></img></Navbar.Brand>
            <Navbar.Brand href="/">LET'S LEARN</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/product">Products</Nav.Link>
                <Nav.Link href="/userlist">Enquiries</Nav.Link>
            </Nav>            
        </Navbar>
    )
}


export default Header;

   
/* Alternate way to link
    <div>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/about'>About</Link></button>
    </div> */

     
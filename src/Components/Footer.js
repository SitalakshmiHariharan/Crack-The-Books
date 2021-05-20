import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Footer extends React.Component {
     constructor(){
         super()
         this.state={}        
     }
     render(){
         return(                
                <Navbar fixed="bottom" bg="dark" variant="dark">
                       
                    <Nav className="mr-auto">                        
                        <Nav.Link href="http://www.github.com">GitHub</Nav.Link>
                        <Nav.Link href="http://www.twitter.com">Twitter</Nav.Link>
                    </Nav> 
                    
                    <div class="navbar navbar-inverse navbar-fixed-bottom">
                        <div class="container">
                             <p class="navbar-text">Copyright© 2021</p>
                        </div>
                    </div> 

                </Navbar>  
                    
         )
     }  
    
}

export default Footer;




    
   
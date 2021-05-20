import react,{Component} from 'react';
import UserList from './UserList';

class UserEnquiry extends Component{

    constructor(){
        super();
        this.state ={
            enquiry:[]
        }        
    }
   
    componentDidMount(){
        fetch('http://localhost:6700/users',{method:'GET'})
        .then ((response) => response.json())
        .then ((data) =>{
            this.setState({enquiry:data})
        })
    }

    render(){         
        const List = this.state.enquiry.map((item)=> <UserList usrname={item.usrname} usremail={item.usremail} interest={item.interest} id = {item.id}/>)        
        return(                          
                <div>
                  {List}                                    
                </div>            
        );
    }

}

export default UserEnquiry;

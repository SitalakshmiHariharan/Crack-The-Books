import React, {Component} from 'react';
import CourseDetail from './CourseDetail';

class Products extends Component{
    constructor(){
        super()
        this.state={
            title:"Courses Offered",
            courses:[]
        };            
    }  

    componentDidMount(){
        fetch('http://localhost:6700/courses',{method:'GET'})
        .then ((response) => response.json())
        .then ((data) =>{
            this.setState({courses:data})
        })
    }


    render(){  
        const List = this.state.courses.map((item)=> <CourseDetail name={item.name} image = {item.img}/>)              
        return(
            <div>
                {List}
            </div>
        )
    }
}

export default Products
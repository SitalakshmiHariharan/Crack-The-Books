import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Aboutus from './Components/Aboutus';
import Home from './Components/Home';
import Products from './Components/Products';
import reportWebVitals from './reportWebVitals';
import Notfound from './Components/Notfound';
import CourseDetail from './Components/CourseDetail';
import EnquireForm from './Components/EnquireForm';
import UserEnquiry from './Components/UserEnquiries';

ReactDOM.render(
  <React.StrictMode>    
    <Router>
    <Header/>      
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about'><Aboutus contact="abc@def.com"/></Route> 
        <Route path='/product' component={Products}></Route>
        <Route path='/course' component={CourseDetail}></Route>
        <Route path='/enquire' component={EnquireForm}></Route>
        <Route path='/userlist' component={UserEnquiry}></Route>
        <Route component={Notfound}></Route>
      </Switch>
    </Router>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeAddress from './address';
import Second from './Second';
import Salary from './SalarySlip'
import Result from './Results';
import Clock from './clock'
import Records from './Records'

function App() {
  // return (
  //   <div className="App">
  //     <h1>Hello cruel world</h1>
  //     <MyAddress />
  //     <Second />
  
  //   </div>
  // );

  return (
    <div>
      <div>
        <h2>Name: Bob Sideshow</h2>
        <HomeAddress Hno='12' street='EastRidge Row' city='Manchester' postcode='SW12 4FD' />
      </div>
      <Salary name=' Peter ' salary ='£27,500' tax='£1,500' netsalary='£26,000'/>
      <Salary name=' Bond ' salary = '£65,500' tax='£5,000' netsalary='£60,500' />
      <Result regno='1' name='Kim' phy='2' che='2' math='2'/>
      <Clock/>
      <Records/>
    
    </div>
  );


}

export default App;

import React from 'react';

class Login extends React.Component{

    render(){
        let element1
        if (this.props.username=='peter'){
            element1=<div>
                <b> Welcome <font color='green'> Peter </font></b>
                <Salary name=' Peter ' salary ='£27,500' tax='£1,500' netsalary='£26,000'/>
                </div>
        }else{
            element1=<b> Welcome Guest</b>
        }
        return (
            <div>{element1}</div>
        )
    }
}

export default Login;
import React from 'react';

class Results extends React.Component{
    render(){

        let total= this.props.phy+this.props.che+this.props.math;
        let percent= total/300*100;
        let result;
        if (percent<=60){
            result= <p>< font color='red'>You have failed the exam</font></p>
        }else{
            result= <p>< font color='green'>You have passed the exam</font></p>
        }
        return(
            <div>
                <table border='1'>
                    <tr>
                        <td>Registration:</td>
                        <td>{this.props.regno}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{this.props.name}</td>
                    </tr>
                    <tr>
                        <td>Physics: {this.props.phy}</td>
                        <td>Chemistry: {this.props.che}</td>
                        <td>Maths: {this.props.math}</td>
                    </tr>
                    <tr>
                        <td>Total Marks: {total}</td>
                        <td>Percentage: {percent}</td>
                    </tr>
                    <tr>
                        <td>Result: {result}</td>
                        {/* <td>Percentage: {percent}</td> */}
                    </tr>

                </table>
            </div>

        );
    }

}
export default Results;
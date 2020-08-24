import React from 'react';
import { render } from 'react-dom';

class SalarySlip extends React.Component{
    render(){
        return(

            <div>
                <table border ='1'>
                    <tr>
                        <td> Name </td>
                        <td> {this.props.name} </td>
                    </tr>
                    <tr>
                        <td> Salary </td>
                        <td> {this.props.salary} </td>
                    </tr>
                    <tr>
                        <td> Tax </td>
                        <td> {this.props.tax} </td>
                    </tr>
                    <tr>
                        <td> Net Salary </td>
                        <td> {this.props.netsalary} </td>
                    </tr>
                </table>
            </div>
        )

    }

}

export default SalarySlip;
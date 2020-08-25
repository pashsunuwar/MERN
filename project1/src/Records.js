import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Records extends Component{
	constructor(){
		super()
		this.Addrecord=this.Addrecord.bind(this)
		this.delete=this.delete.bind(this)

		this.state={
			records:[
				{
					"regno":1,
					"name":"Billy",
					"marks":58
				},
				{
					"regno":11,
					"name":"Nicole",
					"marks":90
				},
				{
					"regno":14,
					"name":"James Bond",
					"marks":80
				},
				{
					"regno":142,
					"name":"Jason",
					"marks":100
				},

			]
			}
	}
	delete(r){
		this.setState({
			records: this.state.records.filter(function(data){
				if (data.regno==r){
					return false
				}else{
					return true
				}
			})
		})
	}
	Addrecord(){
		this.setState({
			records:this.state.records.concat({
					"regno":121,
					"name":"Parker",
					"marks":92
				})	
		})
	}
	render(){
		return (
			<div>
					<br/>
					<br/>	
					<input type="button" value="New Record" onClick={this.Addrecord}/>
					<br/>
					Total Number of Records( { this.state.records.length} )
					<table>
						<tr>
							<td> regno </td>
							<td> name </td>
							<td> marks </td>
						</tr>	
				 	{
				 		this.state.records.map(data	=>
				 		<tr> 
				 			<td> {data.regno}  </td>
				 			<td> {data.name}  </td>
				 			<td> {data.marks} </td>
				 			<td> {data.marks*100/150} </td>
				 			<td> <input type="button" value="delete" onClick={() => this.delete(data.regno)} /> </td>
				 		</tr>
				 		)
				 	}
				 	</table>
			</div>
		)
	}
}
export default Records;
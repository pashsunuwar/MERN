import React from 'react';


class HomeAddress extends React.Component{
	
	render(){
		return(
		<div>
			<h3> {this.props.Hno} </h3>
			<h3> {this.props.street} </h3>
			<h3> {this.props.city} </h3>
            <h3> {this.props.postcode} </h3>
		</div>
		);
	}
}

export default HomeAddress

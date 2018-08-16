import React from 'react';

export class UserInput extends React.Component {

	render() {
		return (
			<div className="box">
				<form onSubmit={this.props.onSubmit}>
				 	<label>Add to the todo list</label> 
			        <input type="text" value={this.props.search} search={this.props.search} onChange={this.props.onChange}/>
			        <button type="submit">Add item</button>
			    </form>
			    <button type="button" className="clear" onClick={this.props.onClick}>Remove all my activites</button> <br/>
		    </div>

		)
	}
}

export default UserInput
import React from 'react';

import {Item} from './item'


export class TaskList extends React.Component {
	
	render() {
		return (
			<div className="list">
				<Item todos={this.props.todos} checkboxState={this.props.checkboxState} 
				isChecked={this.props.isChecked} removeItem={this.props.removeItem} 
				onCheckDone={this.props.onCheckDone} strike={this.props.strike}/>
		    </div>

		)
	}
}


export default TaskList
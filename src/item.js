import React from 'react';

import logo from './bin.png';

export class Item extends React.Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	checkedClassName(item) {
		if (item){
      		return 'line-through'
    	} else {
      		return null
    	}
	}
	onClick(el, event) {
		this.props.onCheckDone(el);
	}

	render() {
    	
		return (
			
			<div className="list">
				<ul>
                	{
	                    this.props.todos.map((el, index) => {
	                    	const className = this.checkedClassName(el.checked)
	                        return (
	                            <li key={index} >
	                                <span className={className}>{el.todo} </span>
	                       			<span>
	                                	<label className="label">
	  										<input type="checkbox" className="label__checkbox" onClick={(event) => {this.onClick(el, event)} }/>
	  										<span className="label__text">
		  										<span className="label__check">
					        						<i className="fa fa-check icon"></i>
					      						</span>
				      						</span>
				  						</label>
				  					</span>
				  					<span>
				  						<img src={logo} alt="bin" width="19" onClick={() => this.props.removeItem(el)}/>
	                                	
	                                </span>
	                            </li>
	                        )
	                    })
                	}
            	</ul>
				 
		    </div>
		)
	}
}


export default Item
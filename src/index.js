import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {UserInput} from './userinput'
import {TaskList} from './tasklist'



class Container extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			todos: [{
        todo: "Learn React",
        checked: false,
      }],
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onClick = this.onClick.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.onCheckDone = this.onCheckDone.bind(this);	
	}

	onChange(event) {
  		this.setState({search: event.target.value});
 	}
 	onSubmit(event) {
 		event.preventDefault();
 		this.setState({
 			search: '',
 			todos: this.state.todos.concat({todo: this.state.search, checked: false})
 		});
 	}
 	onClick(event){
 		this.setState({todos: []}); 		
 	}
 	removeItem(index) {
  		this.setState(prevState => ({
           todos: prevState.todos.filter(
            (el) => {
              return el !== index;
            }
            )
      }));  

      console.log(index) 
	}
	onCheckDone(item) {
  //   function (prevState) {
  //     // return this.state.todo 
  //     return {
  //       todo: []
  //     };
  //   }

		this.setState(
      (prevState) => {
        return {
          todos: prevState.todos.map( 
            (el) => {
              if (el.todo === item.todo) {
                 el.checked = !el.checked
              }
              return el

          })
        }
      }
    );
	}

	
	render() {
		return (
 			<main id="todolist">
 			
 				<h1>Todo List</h1>
				<p>Organise your life</p>
			    <TaskList todos={this.state.todos} strike={this.state.strike} checkboxState={this.state.checkboxState} removeItem={this.removeItem} onCheckDone={this.onCheckDone}/>
 				<UserInput search={this.state.search} todos={this.state.todos} onChange={this.onChange} onSubmit={this.onSubmit} onClick={this.onClick}  removeItem={this.removeItem}/> 				
 			</main>

		)
	}
}

ReactDOM.render(
	<Container />,
	document.getElementById('root')
);
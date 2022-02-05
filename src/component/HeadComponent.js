import React from 'react';
import InputComponent from './InputComponent';
import Task from './Task';

class HeadComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddToDo=this.handleAddToDo.bind(this);
        this.handleChange=this.handleChange.bind(this);
    } 
    state = {
        tasks:[]
      }
      handleAddToDo(value){
          
          this.setState({
            tasks:this.state.tasks.concat(value)
          })
      }
    handleChange(){ 
        this.setState({
            isDone:true
        })
        console.log(this.state.tasks) 
    }
    deleteToDo(id){
      this.setState({
          tasks:this.state.tasks.filter(item => item.id !== id)
      })
    }
    handleChange(id){
        this.setState({
            tasks: this.state.tasks.filter(item =>item.id ===id ? item.isDone=true : null)
        })
    }
    render(){ 
        return (
            <div className="head">
                <h1>Todos</h1>
                <h2>You have {this.state.tasks.length} active tasks</h2>
                <div>
                    <InputComponent onAddToDo={this.handleAddToDo}/>
                </div>
                <div>
                     <Task list={this.state.tasks}
                     click={this.handleChange}
                     delete={this.deleteToDo.bind(this)}/> 
                </div>
            </div>
        
          );
    }
}
 
export default HeadComponent;
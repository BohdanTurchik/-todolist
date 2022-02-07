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
    
      deleteToDo(id){
        let arr=this.state.tasks.filter(item => item.id !== id)
      this.setState({
          tasks:arr
      })
      console.log(this.state)
    }
    
    handleChange(id){
        let arr = this.state.tasks
        arr.map(item =>item.id === id ? item.isDone=true :null)
        this.setState({
            tasks:arr 
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
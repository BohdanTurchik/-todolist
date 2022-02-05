import React from 'react';
import { v4 } from "uuid";

class InputComponent extends React.Component {
    constructor(props){
        super(props);
        this.handleAddToDo=this.handleAddToDo.bind(this);
    }
    state = {
        value: "",
        id:"",
        isDone: false
     }
     handleInput(e){
         const input = e.target.value;
         this.setState(state=>{state.value=input})
     }
   
     handleAddToDo(e){
         e.preventDefault();
         if(this.state.value){
            this.props.onAddToDo({
                value: this.state.value,
                id: v4(),
                isDone: false
             });
             this.setState({value: ""})
         }
         
     }
    render() { 
        return (
            <div className="inputComponent">
                <form onSubmit={this.handleAddToDo}>
                    <input
                        type="text"
                        
                        onChange={this.handleInput.bind(this)}
                    />
                    <button >Send</button>
                </form>
            </div>
          );
    }
}
 
export default  InputComponent;
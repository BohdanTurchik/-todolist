import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

class Task extends React.Component {
    
   render() {
        return (
            <div className="tasks">
                {this.props.list.map( item => <p key={item.id}>{item.value}
                <button>{ !item.isDone ? <FontAwesomeIcon icon={faCheckCircle} onClick={()=>this.props.click(item.id)}/>
                :<FontAwesomeIcon icon={faTrash} onClick={()=> this.props.delete(item.id)} />}</button></p>)}
                
            </div>
          );
    }
}
 
export default Task;
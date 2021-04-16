import {Component} from 'react'

 export default class Todos extends Component{
     removeTodo=(e)=>{
         e.preventDefault()
         this.props.removeTodo(e.target.id)
     }
    render(){
        return this.props.todos.map(todo=>(
            <div key={todo.id} 
                id={todo.id} 
                onClick={this.removeTodo}>
                    {todo.name}
            </div>
        ))
    }
}
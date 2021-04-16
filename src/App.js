import react,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos'
import AddTodo from './AddTodo'
import NoItems from './NoItems'

class App extends Component {
  constructor(){
    super()
    this.state={
      todos:[
      {
        id:uuidv4(),
        name:"vamsi"
      },
      {
        id:uuidv4(),
        name:"krishna"
      },
      {
        id:uuidv4(),
        name:"munduri"
      }
    ]
}
  }
  
  addTodo=(value)=>{
    let tempTodos=this.state.todos
    tempTodos.push({id:uuidv4(),name:value})
    this.setState({todos:tempTodos})
  }
  removeTodo=(val)=>{
    let tempTodos=this.state.todos.filter((todo)=>{
      return todo.id!==val
      
    })
    this.setState({todos:tempTodos})
  }
  render()
  {
    return (
    <div className="App">
      <AddTodo addTodo={this.addTodo}/>
      <NoItems itemCount={this.state.todos.length}/>
      <Todos todos={this.state.todos} removeTodo={this.removeTodo}/>
      
    </div>
  )
}
}

export default App;

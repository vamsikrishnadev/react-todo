import {Component} from 'react'

export default class AddTodo extends Component{
    state={
newtodo:""
    }
    addTodo=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.newtodo)
        this.setState({newtodo:""})
    }
    onChangevalue=e=>{
        console.log(e)
        this.setState({newtodo:e.target.value})
    }
    render(){
        return <div>
            <input type="text" name="txtTodo" value={this.state.newtodo} onChange={this.onChangevalue}/>
            <button onClick={this.addTodo}>Add Todo</button>
        </div>
    }
}
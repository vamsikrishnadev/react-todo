import react from "react";

export default class NoItems extends react.Component
{
    render()
    { 
        if (this.props.itemCount==0)
        return <div>List is empty</div>
        else
        return ""
    }
}
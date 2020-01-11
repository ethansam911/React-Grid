import React, { Component } from "react"
 
export default class TableCell extends Component{ 

    constructor(props) 
    {
        super(props)
        this.state = 
        {
            color: this.props.color,
            isColored: false
        }
    }
    setColor = () =>
    {
        this.setState({
            color: this.props.color,
            isColored: true
        })
    }

render()    
{
    console.log(this.props.color);
    return (<td onClick={this.setColor} id={this.state.color}></td>);
}

}
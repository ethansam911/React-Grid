/* eslint-disable */
import React, { Component } from 'react';
import TableCell from './TableCell' 


export default class TableRow extends Component{ 
    constructor(props)
    {
        super(props);
    }

    updateRowContent()
    {
        let thisRow = [];
        for (let i = 0; i < this.props.row.length; i++) 
        {
            console.log(this.props.row[i]);
            //Row is a property of TableRow, which was passed down
            thisRow.push(<TableCell colorValue={this.props.colorValue} color={this.props.row[i]} />);
        }
        return thisRow;
    }

    render() 
    {
        return <tr> {this.updateRowContent()} </tr>;
    }

}
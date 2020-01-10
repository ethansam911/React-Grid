/* eslint-disable */
import React from 'react';
import TableRow from './TableRow'
import './TableStyles.css'  

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numRows: 0,
      numCols: 0,
      color: 'grey',
      table: []
    };


    this.AddRow = this.AddRow.bind(this);
    this.AddColumn = this.AddColumn.bind(this);
    //All bindings go here
    /*
    this.RemoveRow = this.RemoveRow.bind(this);
    this.RemoveCol = this.RemoveCol.bind(this);
    this.ChangeColor = this.ChangeColor.bind(this);
    */
  }

  AddRow()
  {
    //Declare a new row
    let newRow;
    if (this.state.numRows === 0 && this.state.numCols === 0)
    {
      newRow = ["red"];
      console.log("BOTH LESS THAN 0");
      this.setState({

        numRows: this.state.numRows + 1,
        numCols: this.state.numCols + 1,
        table: [...this.state.table, newRow]

      })
    }
    else 
    {
      newRow = new Array(this.state.numCols).fill("red");
      console.log("BOTH NOT LESS THAN 0");
      this.setState({
        numRows: this.state.numRows + 1,
        table: [...this.state.table, newRow]
      });
      
    }
  }
  
  AddColumn()
  {
  let newCol;
  if (this.state.numRows === 0 && this.state.numCols === 0) {

    console.log("BOTH LESS THAN 0");
    this.setState({
      numRows: this.state.numRows + 1,
      numCols: this.state.numCols + 1,
      table: [...this.state.table, ["gray"]]
    })
  }
  else 
    {
    //  let temp = this.state.table.map(element => 
    //   {
    //    element = <TableRow numCells = {this.state.numCols+1}/>;
    //    return element;
    //  })
    let temp = [...this.state.table];
    for (let i = 0; i < temp.length; i++) {
      temp[i].push("gray");
    }
     console.log("temp:", temp);
     this.setState({
       //Increment the number of columns
       numCols: this.state.numCols +1,
       //Pass the entire array
       table: temp
     },
 
  )
}
};
  




  displayData()
  {
    if(this.state.table.length!==0)
    {
      return this.state.table.map( columns => <TableRow columns={columns} />)
    }
    else
    {
      return null;
    }
    //Map through the table row and append a <td>
  }
  
  render() 
  {
    return (
    <div>
        <h1> Number of Rows  </h1>
        <button id="AddRow" type="button" onClick={this.AddRow} > AddRow</button>
        <button id="AddCol" type="button" onClick={this.AddColumn} > AddCol</button>
      <div> 
      <table>
      {this.displayData()}
      </table>  
      <p>{this.state.numRows}</p>
      </div>
    </div>  
      
  
    );
  }
}



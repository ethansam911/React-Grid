/* eslint-disable */
import React from 'react';
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
    //All bindings go here
    /*
    this.AddCol = this.AddCol.bind(this);
    this.RemoveRow = this.RemoveRow.bind(this);
    this.RemoveCol = this.RemoveCol.bind(this);
    this.ChangeColor = this.ChangeColor.bind(this);
    */
  }

  AddRow()
  {
    //Declare a new row
    let newRow = new Array(col, 'grey');
    //Append a new row 
    this.setState({row: this.state.row+1,
                   table: [...this.state.table, newRow]  });
  } 

  displayData()
  {
    return this.state.table.map( row => <TableRow row={row} />)
    //Map through the table row and append a <td>
  }
  
  render() {
    return (
    <div>
      <Buttons />
      <div> 


      {this.displayData()}
      </div>
    </div>  
  
    );
  }
}

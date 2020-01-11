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
      colorValue: 'grey',
      table: []
    };


    this.AddRow = this.AddRow.bind(this);
    this.AddColumn = this.AddColumn.bind(this);
    this.RemoveRow = this.RemoveRow.bind(this);
   // this.RemoveCol = this.RemoveCol.bind(this);
    this.setSelectedColor = this.setSelectedColor.bind(this);
  
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
  RemoveRow() {
    //Declare a new row
    let newRow;
    if (this.state.numRows >= 1) {
      newRow = ["red"];
      console.log("BOTH LESS THAN 0");
      this.setState({

        numRows: this.state.numRows - 1,
        table: [...this.state.table.slice(0, -1)]

      })
    }
    else {
      newRow = new Array(this.state.numCols).fill("red");
      this.setState({
        numRows: 0,
        table: [...this.state.table]
      });
      alert("Cannot remove any more rows!");

    }

    //Append a new row 
    console.log("Hello", newRow);

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
/*
  Events are objects with certain properties, and e.target almost always represents a DOM element.Thus e.target.value is the value property of some DOM element
*/
  setSelectedColor = (event) => 
  {
    this.setState({
      colorValue: event.target.value
    });
  }
  


  
  displayData()
  {
    //The length of the table array is at least 1
    if(this.state.table.length>0)
    {
      //row is a key, associated with a row in the Table
      return this.state.table.map(row => <TableRow colorValue={this.state.colorValue} row={row} />)
        //{row} is a JSX expression representing the key   
    }
    else
    {
      return null;
    }

  }

  render() 
  {
    return (
    <div>
        <div className="buttonContainer">
          <button onClick={this.AddRow}>Add Row</button>
          <button id="RemoveRow" type="button" onClick={this.RemoveRow}> RemoveRow</button>
          <button onClick={this.AddColumn}>Add Column</button>
            <select onChange={this.setSelectedColor}>
              <option value="gray">Gray</option>
              <option value="pink">Pink</option>
              <option value="blue">Blue</option>
              <option value="purple">Purple</option>
            </select>
        </div> {"\n"}
          <p> Number of Rows  </p>
          <p>{this.state.numRows}</p>
          <p> Number of Columns </p>
          <p>{this.state.numCols}</p>
      <table>
          <tbody>{this.displayData()}</tbody>
      </table>
      </div> 
      
  
    );
  }
}



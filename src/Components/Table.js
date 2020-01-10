import React from 'react';
 /* eslint-disable */

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 0,
      col: 0,
      color: 'grey'
    };

    //All bindings go here
    /*
    this.AddRow = this.AddRow.bind(this);
    this.AddCol = this.AddCol.bind(this);
    this.RemoveRow = this.RemoveRow.bind(this);
    this.RemoveCol = this.RemoveCol.bind(this);
    this.ChangeColor = this.ChangeColor.bind(this);
    */
  }

  /*
  AddRow(){
    this.setState({row: this.state.row + 1});
  } 
  */
  render() {
    

    return (
    <div>
      <button id="AddRow" type="button" onclick="AddRow()">ADD ROW</button>
      <button id="AddColumn" type="button" onclick="AddCol()">ADD COLUMN</button>
      <button id="RemoveRow" type="button" onclick="RemoveRow()">REMOVE ROW</button>
      <button id="RemoveCol" type="button" onclick="RemoveCol()">REMOVE COLUMN</button>
    </div>     
    );
  }
}

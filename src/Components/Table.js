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
    
    this.setState({row: this.state.row+1});
    return (<div class="row">
            <tr>
                <td>Hello</td>
            </tr>
    </div>);


  } 

  displayData()
  {


  }
  
  render() {
    

    return (
    <div>
      <button id="AddRow" type="button" onClick="AddRow()">ADD ROW</button>
      <button id="AddColumn" type="button" onClick="AddCol()">ADD COLUMN</button>
      <button id="RemoveRow" type="button" onClick="RemoveRow()">REMOVE ROW</button>
      <button id="RemoveCol" type="button" onClick="RemoveCol()">REMOVE COLUMN</button>
      <div>
        <tr> 
           <td>
             hello
          </td>
        </tr>
        </div>
    </div>  
  
    );
  }
}

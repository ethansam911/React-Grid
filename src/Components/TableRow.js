import React from "react";
import TableCell from './TableCell' 

export default function TableRow({columns}) 
{
    console.log(columns);

    return (
        <tr>
            {columns.length>0 && columns.map((element) =>
            {
            return <TableCell element={element} />
            })}
        </tr>
    );
  }
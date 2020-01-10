import React from "react";


export default function TableRow({columns}) 
{

    return (
        <div>
            {columns.map((element) =>{
                return element
            })}
        </div>
    );
  }
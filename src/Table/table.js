import React, { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';



export const Table = (props) => {
    const [tempState, setTempState] = useState([])
    const columns = useMemo(() => props.columns, [props.columns])
    
     const data = useMemo(() => props.data, [props.data])
    //const data = props.data
    console.log(data)

    useEffect(() => {
        setTempState(props.data)
        console.log(tempState)
    }, [props.data])
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows, 
        prepareRow
    } = useTable ({
        columns, 
        data
    })

   


    return (
        <>
        <table {...getTableProps()}>
        <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.row && row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
        </table>
            {props.data.length > 0 && props.data.map((item, index) => {
                return <div key={index}>{item.name}</div>
            })}
        </>
    )

}
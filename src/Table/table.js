import React, { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';



export const Table = (props) => {
    const columns = useMemo(() => props.columns, [props.columns])
    const data = useMemo(() => props.data, [props.data])
        
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
                  <tr {...row.getRowProps()} className="tableRowsCustoms">
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>
        </table>
           
        </>
    )

}
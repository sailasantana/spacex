import React, { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import './table.css';
import PropTypes from 'prop-types';




export const Table = (props) => {

    const columns = useMemo(() => props.columns, [props.columns])
    const data = useMemo(() => props.data, [props.data])
    
    const [popUp, setPopup] = useState(false);



     const getTableHandle = () => {

        setPopup(!popUp)

    }

    const closePopUpHandle = () => {

        setPopup(false)
    }
        
    const {
       //This function is used to resolve any props needed for your table wrapper
        getTableProps,
        //This function is used to resolve any props needed for your table body wrapper.
        getTableBodyProps,
        //An array of normalized header groups, each containing a flattened array of final column objects for that row.
        headerGroups,
        //An array of normalized header groups, but in reverse order, each containing a flattened array of final column objects for that row.
        footerGroups,
        //An array of materialized row objects from the original data array and columns passed into the table options
        rows, 
        //This function is responsible for lazily preparing a row for rendering. Any row that you intend to render in your table needs to be passed to this function before every render.
        //Since table data could potentially be very large, it can become very expensive to compute 
        //all of the necessary state for every row to be rendered regardless if it actually is rendered or not
        // (for example if you are paginating or virtualizing the rows, you may only have a few rows visible at any given moment). This function allows only the rows you
        // intend to display to be computed and prepped with the correct state.
        prepareRow
    } = useTable ({
        columns, 
        data
    })

 
   
    return (
        <> 
     <div className = "All-container">   
     <button onClick = {getTableHandle} className = "Table-button">{props.name}</button> 
     {data.length > 0 && popUp ?
     <div className = "Pop-up-container">
       <div className = "Close-pop-up-container">  
       <button onClick = {closePopUpHandle} className = "Close-pop-up-button">x</button>
       </div>
        <table className = "Table-container" {...getTableProps()}>
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
        </div>
        : null}

         </div>  
        </>
    )

}

Table.propTypes = {
  columns: PropTypes.array,
  data : PropTypes.array,
  name: PropTypes.string
};
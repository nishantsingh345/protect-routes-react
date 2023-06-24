import { useMemo } from "react";
import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((columns) => (
                <th {...columns.getHeaderProps()}>{columns.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
             {rows.map((row)=>(
                 prepareRow(row)
                 <tr></tr>
             ))}
        </tbody>
      </table>
    </div>
  );
};

export default BasicTable;

{rows.map((row)=>(
               
                
                 
                    <tr {...row.getRowProps()}>
                          {
                            row.cells.map(cell =>{
                                return <td {...cell.getCellProps()}>{cell.render('cell')}</td>
                            })
                          }
                    </tr>
      
             ))}
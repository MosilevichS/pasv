import {useState} from "react";
import {nanoid} from "nanoid";

function App9() {

    const initialTableData = [
        [{id: nanoid()}, {id: nanoid()}],
        [{id: nanoid()}, {id: nanoid()}],
        [{id: nanoid()}, {id: nanoid()}]
    ]
    const initialTableData2 = [
        {id: 'r1', cols: [{id: nanoid()}, {id: nanoid()}]},
        {id: 'r2', cols: [{id: nanoid()}, {id: nanoid()}]},
        {id: 'r3', cols: [{id: nanoid()}, {id: nanoid()}]}
    ]

    const [columns, setColumns] = useState(2)
    const [rows, setRows] = useState(3)
    const [tableData, setTableData] = useState(initialTableData)
    const generateTableData = (c, r) => {
        const table = [];
        for (let row = 1; row <= r; row++) {
            const tempRow = [];
            for (let col = 1; col <= c; col++) {
                tempRow.push({id: nanoid()})
            }
            table.push(tempRow)
        }
        setTableData(table)
    }
    const minusColumns = () => {
        if (columns > 1) {
            setColumns(columns - 1)
        }
        generateTableData(columns - 1, rows)
    }

    const plusColumns = () => {
        setColumns(columns + 1)
        generateTableData(columns + 1, rows)
    }
    const minusRows = () => {
        if (columns > 1) {
            setRows(rows - 1)
        }
        generateTableData(columns, rows - 1)
    }
    const plusRows = () => {
        setRows(rows + 1)
    }
    generateTableData(columns, rows + 1)

    return (
        <div>
            <button onClick={minusColumns}>Minus col</button>
            {columns}
            <button onClick={plusColumns}>Plus col</button>

            <hr/>

            <button onClick={minusRows}>Minus row</button>
            {rows}
            <button onClick={plusRows}>Plus row</button>

            <table border={1}>
                <tbody>
                {tableData.map((row, index) =>
                    <tr key={index}>
                        {row.map(col => <td key={col.id}>
                            {col.id}</td>)}
                    </tr>)}
                </tbody>
            </table>


        </div>
    )
}

export default App9
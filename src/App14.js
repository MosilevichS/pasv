import {shuffle, chunk} from 'lodash'
import './App.css'
import {nanoid} from "nanoid";
import {useState} from "react";

function App14() {
    const side = 4
    let variants = []
    for (let i = 1; i <= side * side / 2; i++) {
        variants.push(i)
    }
    variants = [...variants, ...variants]
    variants = shuffle(variants).map(el => ({ open: false, value: el, id: nanoid()}))
    variants = chunk(variants, side)
    const [gameField, setGameField] = useState(variants)
    console.log(variants)
    const openClick = (id) => {
        const updatedField = gameField.map(row =>
            row.map(col => col.id === id ?
                {...col, open : true} : col))
        setGameField(updatedField)
    }

    return (
        <table border={1}>
            <tbody>
            {gameField.map((row, rowindex) =>
                <tr key={rowindex}>
                {row.map((col, colindex) =>
                    <td key={colindex}>{col.open ?
                        col.value : <button onClick={()=>openClick(col.id)}>open</button> }
                    </td>)}
            </tr>
            )}


            </tbody>
        </table>


    )
}

export default App14
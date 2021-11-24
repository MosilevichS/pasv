import {nanoid} from "nanoid";
import {useState} from "react";
import './App.css'

function App15() {
    let choice = '';
    let color = 'red'

    const gameField = [
        [{id: nanoid(), value: choice}, {id: nanoid(), value: choice}, {id: nanoid(), value: choice}],
        [{id: nanoid(), value: choice}, {id: nanoid(), value: choice}, {id: nanoid(), value: choice}],
        [{id: nanoid(), value: choice}, {id: nanoid(), value: choice}, {id: nanoid(), value: choice}]
    ]
    const [updatedGameField, setUpdatedGameField] = useState(gameField)
    const clickButton = (id) => {
      const newUpdatedGameField = updatedGameField.map(row =>
      row.map(col => col.id === id ? {...col, value: 'x'} : col))
    }
    function changeStyle(){
        var element = document.getElementById("Player");
        element.style.color = "#FF0000";
    }


    return (
        <div>
            <table border='5px' >
                <tbody>
                {updatedGameField.map((row, rowindex) =>
                <tr key={rowindex}>
                    {row.map((col, colindex) =>
                    <td key={colindex}><button onClick={() => clickButton(col.id)}>{col.value}</button></td>)}
                </tr>
                )}
                </tbody>
            </table>
            <div id = 'Player' onClick={"changeStyle()"} >Player 1</div>
            <div id = 'Player'>Player 2</div>
        </div>
    )
}

export default App15
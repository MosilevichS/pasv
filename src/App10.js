import {useState} from "react";
import './App.css'
import {nanoid} from "nanoid";

const initialCounters = [
    {id: 1, value: 1, buttons: [1]},
    {id: 2, value: 2, buttons: [1, 2]},
    {id: 3, value: 3, buttons: [1, 2, 3]}
]

function App10() {
    const [counters, setCounters] = useState(initialCounters)
    const [nextCounterValue, setNextCounterValue] = useState(4)
    const [nextButtons, setNextButtons] = useState(initialCounters[initialCounters.length - 1].buttons)
    const plusButton = (id, button) => {
        const newCounters = counters.map(el => el.id === id ?
            ({...el, value: el.value + button}) : el)
        setCounters(newCounters)
    }
    const minusButton = (id, button) => {
        const newCounters = counters.map(el => el.id === id ?
            ({...el, value: el.value - button}) : el)
        setCounters(newCounters)
    }
    const addCounter = () => {
        const newCounters = [...counters, {id: nanoid(), value: nextCounterValue, buttons: [1, 2, 3, 4]}]
        setCounters(newCounters)
        setNextCounterValue(nextCounterValue + 1)
    };



    return (
        <div className='App'>
            {counters.map(el =>
                <div>
                    {el.buttons.map(button =>
                        <button onClick={()=> minusButton(el.id, button)}> {-button} </button>)}
                    {el.value}
                    {el.buttons.map(button =>
                        <button onClick={() =>plusButton(el.id, button)}> {button} </button>)}
                </div>
            )}
            <button onClick={addCounter}>add Counter</button>


        </div>
    )

}

export default App10
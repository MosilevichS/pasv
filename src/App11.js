import {nanoid} from "nanoid";
import {useState} from "react";
import './App.css'

function App11() {
    const initialCounter = [
        {id: nanoid(), value: 1, buttons: [1]},
        {id: nanoid(), value: 1, buttons: [1, 2]},
        {id: nanoid(), value: 1, buttons: [1, 2, 3], last :4}
    ]
    const [counters, setcounters] = useState(initialCounter)
    const [nextCounterValue, setNextCounterValue] = useState(4)
    const [nextButtons, setNextButtons] = useState([1, 2, 3, 4])


    const minusCounter = (id, button) => {
        const newCounter = counters.map(el => el.id === id ?
            ({...el, value: el.value - button}) : el)
        setcounters(newCounter)
    }
    const plusCounter = (id, button) => {
        const newCounter = counters.map(el => el.id === id ?
            ({...el, value: el.value + button}) : el)
        setcounters(newCounter)
    }
    const delCounter = (id) => {
        const newCounter = counters.filter(el => el.id !== id)
        setcounters(newCounter)
    }
    const addCounter = () => {
        const newCounter = [...counters, {id: nanoid(), value : nextCounterValue,
            buttons: nextButtons}]
        console.log('nextButtons', nextButtons)
        console.log('last', counters[counters.length-1].last)

        setNextCounterValue(nextCounterValue + 1)
        setcounters(newCounter)
        setNextButtons([...nextButtons,nextButtons.push(nextCounterValue)])
    }

    return (
        <div className='App'>

            {counters.map(el =>
                <div>
                {el.buttons.map(button =>
            <button onClick={()=> minusCounter(el.id, button)}> {-button} </button>)}
                {el.value}
                    {el.buttons.map(button =>
                <button onClick={()=>plusCounter(el.id, button)}> {button} </button>)}
                <button onClick={()=>delCounter(el.id) }> del </button>
                </div>
            )}
            <button onClick={addCounter}>Add Counter</button>

        </div>
    )


}

export default App11
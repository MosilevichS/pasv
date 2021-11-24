import './App.css'
import {nanoid} from "nanoid";
import {useCallback, useState} from "react";

const initialCounter = [
    {id: nanoid(), value: 1, buttons: [1]},
    {id: nanoid(), value: 2, buttons: [1, 2]},
    {id: nanoid(), value: 3, buttons: [1, 2, 3]}
]

function App13() {
    const [counter, setCounter] = useState(initialCounter)
    const [counterValue, setCounterValue] = useState(4)
    const [counterButton, setCounterButton] = useState([1, 2, 3, 4])
    const minusCounter = (id,button) =>{
        console.log(id.value)
        const newCounter = counter.map(el => el.id === id ? ({...el, value: el.value - button}) : el)
        setCounter(newCounter)
    }
    const plusCounter = (id,button) =>{
        const newCounter = counter.map(el => el.id === id ? ({...el, value: el.value + button}) : el)
        setCounter(newCounter)
    }
    const delCounter = (id) => {
        const newCounter = counter.filter(el => el.id !== id)
        setCounter(newCounter)
    }
    const addCounter = () => {
        const newCounter = [...counter, {id:nanoid(), value: counterValue, buttons :counterButton }]
        setCounter(newCounter)
        setCounterValue(counterValue + 1)
        setCounterButton([...counterButton,counterValue])

    }



    return (
        <div className='App'>
            {counter.map(el =>
                <div>
                        {el.buttons.map(button =>
                            <button onClick={() => minusCounter(el.id,button)}>{-button}</button>)}
                        {el.value}
                        {el.buttons.map(button =>
                            <button onClick={() => plusCounter(el.id,button)}>{button}</button>)}
                    <button onClick={() => delCounter(el.id)}>Del</button>
                </div>
            )}
            <hr />
            <button onClick={addCounter}>New counter</button>



        </div>


    )


}

export default App13
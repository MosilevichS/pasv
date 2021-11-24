import {useState} from "react";

function App8() {
    let ava = '';
    const initialList = [
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3}
    ]
    const [counter, setCounter] = useState(initialList)
    const minusCounter = (id) => {
    let updatedCounter = counter.map(el => el.id === id ?
        ({...el, value: el.value - 1}) : el)
        setCounter(updatedCounter)
    }
    const plusCounter = (id) => {
        let updatedCounter = counter.map(el => el.id === id ?
            ({...el, value: el.value + 1}) : el)
        setCounter(updatedCounter)
    }
    const deleteCounter = (id) => {
        let updatedCounter = counter.filter(el => el.id !== id)
        setCounter(updatedCounter)
    }
    const addCounter = (id) => {
        let updatedCounter = [...counter, {id: Math.random() * 10, value: 2}]
        setCounter(updatedCounter)
    }
    const upCounter = (id) => {
        const index = counter.findIndex(el => el.id === id)
        let updatedCounter = [...counter]
        let tempValue = updatedCounter[index]
        updatedCounter[index] = updatedCounter[index - 1]
        updatedCounter[index - 1] = tempValue
        setCounter(updatedCounter)
    }
    const downCounter = (id) => {
        const index = counter.findIndex(el => el.id === id)
        let updatedCounter = [...counter]
        let tempValue = updatedCounter[index]
        updatedCounter[index] = updatedCounter[index + 1]
        updatedCounter[index + 1] = tempValue
        setCounter(updatedCounter)
    }

    return (
        <div>
            {counter.map((el, index) => (
                <div key={el.id}>
                    {index !== 0 ?(<button onClick={() =>
                            upCounter(el.id)}> Up </button>) : null}

                    <button onClick={() => minusCounter(el.id)}> - </button>
                    {el.value}
                    <button onClick={() => plusCounter(el.id)}> + </button>
                    <button onClick={() => deleteCounter(el.id)}> Del </button>
                    {index !== counter.length - 1?(<button onClick={() =>
                        downCounter(el.id)}> Down </button>) : null}
                </div>
                ))}
            <hr />
            <button onClick={addCounter}> Add </button>
        </div>

    )
}
export default App8
import React, {useState} from 'react'
import Button from '../common/Button/Button'
import  './Counter.scss'

const incrementHandler = (count, setCount) => {
    setCount(count + 1)
}

const decrementHandler = (count, setCount) => {
    setCount(count - 1)
}

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <article className='counter'>
            <div className='count'>
                <span>{count}</span>
            </div>
            <div class="buttons">
                <Button onClick={() => {
                    incrementHandler(count, setCount)
                }}>INCREMENT</Button>
                <Button onClick={() => {
                    decrementHandler(count, setCount)
                }}>DECREMENT</Button>
            </div>
        </article>
    )
}

export default Counter

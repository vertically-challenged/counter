import React, {useState} from 'react'
import Button from '../common/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import  './Counter.scss'

const incrementHandler = (dispatch) => {
    dispatch({type: 'INCREMENT'})
}

const decrementHandler = (dispatch) => {
    dispatch({type: 'DECREMENT'})
}

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state)

    return (
        <article className='counter'>
            <div className='count'>
                <span>{count}</span>
            </div>
            <div className="buttons">
                <Button onClick={() => {
                    incrementHandler(dispatch)
                }}>INCREMENT</Button>
                <Button onClick={() => {
                    decrementHandler(dispatch)
                }}>DECREMENT</Button>
            </div>
        </article>
    )
}

export default Counter

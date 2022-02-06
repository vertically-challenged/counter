import React from 'react'
import Button from '../common/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import  './Counter.scss'

const incrementHandler = (dispatch) => {
    dispatch({type: 'INCREMENT'})
}

const decrementHandler = (dispatch) => {
    dispatch({type: 'DECREMENT'})
}

const toggleTheme = (theme, dispatch) => {
    if (theme.currentTheme === 'DARK') {
        document.body.className = 'light'
        dispatch({type: 'LIGHT'})
    } else {
        dispatch({type: 'DARK'})
        document.body.className = ''
    }   
}

const createClassNameWidthTheme = (theme) => {
    return `counter ${theme.currentTheme}`
}

const asyncIncrementHandler = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: 'ASYNC_INCREMENT'})
        }, 5000);
    }
}

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.count)
    const theme = useSelector(state => state.theme)

    return (
        <article className={createClassNameWidthTheme(theme)}>
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
                <Button onClick={() => {
                    dispatch(asyncIncrementHandler())
                }}>ASYNC INCREMENT</Button>
                <Button onClick={() => {
                    toggleTheme(theme, dispatch)
                }}>{theme.contraryTheme} THEME</Button>
            </div>
        </article>
    )
}

export default Counter

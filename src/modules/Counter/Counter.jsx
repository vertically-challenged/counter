import React, { useState } from 'react'
import {connect} from 'react-redux'
import {increment} from '../../redux/actions';
import Button from '../common/Button/Button'
import './Counter.scss'


const Counter = ({count}) => {

    return (
        <div>
            <div className='counter'>{count}</div>
            <div className='buttons'>
                <Button onClick={incOnClickHandler}>Increment</Button>
                <Button>Decrement</Button>
                <Button>Async Increment</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count.count
    }
}

const mapDispatchToProps = {
    increment
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

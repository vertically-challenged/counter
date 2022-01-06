import React from 'react'
import './MainContainer.scss'

const MainContainer = (props) => {
    return (
        <div className='mainContainer'>
            {props.children}
        </div>
    )
}

export default MainContainer
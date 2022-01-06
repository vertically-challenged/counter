import React from 'react'
import './App.css'
import MainContainer from './modules/_MainContainer/MainContainer'
import Counter from './modules/Counter/Counter'
import ThemeToggle from './modules/ThemeToggle/ThemeToggle'

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Counter/>
        <ThemeToggle/>
      </MainContainer>
    </div>
  )
}

export default App;

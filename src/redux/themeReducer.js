const initState = {
    currentTheme: 'DARK', 
    contraryTheme: 'LIGHT'
}

const themeReducer = (state = initState, action) => {
    if (action.type === 'LIGHT') {
        return {
            currentTheme: 'LIGHT', 
            contraryTheme: 'DARK'
        }
    } else if (action.type === 'DARK') {
        return {
            currentTheme: 'DARK', 
            contraryTheme: 'LIGHT'
        }
    }

    return state
}

export default themeReducer
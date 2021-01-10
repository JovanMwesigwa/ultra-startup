import React, { useReducer }  from 'react'

const initialState = {
    firstCounter: 0,
}

const reducer = (state, action) => {
    switch(action.type){
        case 'increament':
            return {firstCounter: state.firstCounter + 1}
        case 'decreament':
            return {firstCounter: state.firstCounter - 1}
        case 'reset':
            return initialState
        default:
            return state 
    }
}

function CounterTwo() {
    const [ count, dispatch ] = useReducer(reducer, initialState);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => dispatch({type: 'increament'})}>Increament</button>
            <button onClick={() => dispatch({type: 'decreament'})}>Decrease</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default CounterTwo
import {useReducer } from 'react';

const initialState = {
    count: 0,
    numberToChangeBy: 1
};

const reducer = (state, action) =>  {
    switch(action.type) {
        case 'count':
            return {...state, count: state.count};
        case 'numberToChangeBy':
            return {...state, numberToChangeBy: state.numberToChangeBy}
        case 'incrementCount': {
            return {...state, count: parseInt(state.count,10)+parseInt(state.numberToChangeBy,10)}
        }
        case 'decrementCount': {
            return {...state, count: parseInt(state.count,10)-parseInt(state.numberToChangeBy,10)}
        }
        case 'changeNumber': {
            return {...state, numberToChangeBy: action.value}
        }
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (<div className="App">
    <pre className="rainbow box text-center"> {state.count} </pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({type: 'incrementCount'})}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={() => dispatch({type: 'decrementCount'})}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={(e) => dispatch({type: 'changeNumber', value: e.target.value})} type="number" value={state.numberToChangeBy} name="number" id="number" /></p>
  </div>);
}

export default Counter;

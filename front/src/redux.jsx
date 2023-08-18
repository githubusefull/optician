/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
export const Redux = createContext();
const initialState = {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
     : null,
};


function reducer(state, action) {
    switch (action.type) {
             
              case 'USER_SIGNIN':
              return {...state, userInfo: action.payload};
              case 'USER_SIGNOUT':
                return {
                    ...state,
                    userInfo : null,
                };
                

                default:
                    return state;
    }
}
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {state, dispatch};
    return <Redux.Provider value={value}>{props.children}</Redux.Provider>
}
import React,{createContext , useReducer} from 'react'
//initial state
const initialState = {
    transections:[
        {id:1, text:"flower",amount: -20},
        {id:2, text:"salary",amount: 300},
        {id:3, text:"book" ,amount: -10},
        {id:4, text:"camera",amount: 150}
    ]

}
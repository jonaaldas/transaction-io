import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
import { v4 } from 'uuid';


const initialState = [];

// const initialQuestions = {
//     Buyer: [
//                 {
//                     // id: v4(),
//                     action: 'Attorney Review Started',
//                     checked: true
//                 },
//                 {
//                     // id: v4(),
//                     action: 'Attorney Review Ended',
//                     checked: true
//                 },
//                 {
//                     // id: v4(),
//                     action: 'Inspection Was ordered',
//                     checked: false
//                 },
//                 {
//                     // id: v4(),
//                     action: 'Apprasial was ordered',
//                     checked: false
//                 },
//                 {
//                     // id: v4(),
//                     action: 'Closed',
//                     checked: false
//                 }    
//     ],
//     Seller: [
//                 {
//                     // id: v4(),
//                     action: 'Listing Paper Work singed ',
//                     checked: false
//                 },
//                 {
//                     // id: v4(),
//                     action: 'Photos has been ordered',
//                     checked: false
//                 },
//                 {
//                     // id: v4(),
//                     action: 'Listing is live',
//                     checked: false
//                 },
//                 {
//                     // id: v4(),
//                     action: 'Showings has started',
//                     checked: false
//                 },
//                 {
//                     // id: v4(),
//                     action: 'Got an offer',
//                     checked: false
//                 }
//             ]    
// }

// const totalSoldArr = []

export const Client = createContext(initialState);

// export const Questions = createContext(initialQuestions)

// export const totalSold = createContext(totalSoldArr)

export default function DataContext({children}){

    // currency formatter
    const NUMBER_FORMATTER = new Intl.NumberFormat('en-US', {
        currency: 'USD',
        style:'currency',
        maximumFractionDigits: 0, 
        minimumFractionDigits: 0, 
    })
    function formatCurrency (number) {
        return NUMBER_FORMATTER.format (number)
    }

    const [state, dispach] = useReducer(AppReducer, initialState)

    const addClient = (formClient) => {
        dispach({ type: 'ADD_CLIENT', payload: {...formClient, id: v4(), price: formatCurrency(parseInt(formClient.price))} });
    }

    const deleteTask = (id) => {
        dispach({type: 'DELETE_TASK', payload: id})
    }

    const updateTask = (task) => {
        dispach({type: 'UPDATE_TASK', payload: task})
    }

    const handleChecked1 = (id,questionsID,event) => {
        dispach({type: 'CHANGE_CHECKED', payload: [id, questionsID]})
    }

    return (
        <Client.Provider value=
            {
                {state, initialState, addClient, deleteTask, updateTask, handleChecked1}
             }>
            {children}
        </Client.Provider>
    )
}
import uuid from "uuid"
import database from "../firebase/firebase"
import { auth } from "firebase";

export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {    // works because of thunk
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {                         // andere Schreibweise für defaults wie ehemals addExpense (als object in Klammer)
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {     // return used for promise-chaining when testing
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

export const removeExpense = ({ id} = {}) => ({        // destructuring used when getting an object/array
    type: "REMOVE_EXPENSE",
    id
})

export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).child(id).remove().then(() => {  // or `expenses${id}` for child(id)
            dispatch(removeExpense({ id }))
        })
    }
}

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const expenses = []
        return database.ref(`users/${uid}/expenses`).once("value").then((snapshot) => { //snapshot is object structure, we need array structure
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })

            dispatch(setExpenses(expenses))
        })
    }
}
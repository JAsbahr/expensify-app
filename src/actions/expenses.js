import uuid from "uuid"
import database from "../firebase/firebase"

export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

export const startAddExpense = (expenseData = {}) => {    // works beacause of thunk
    return (dispatch) => {
        const {                         // andere Schreibweise für defaults wie ehemals addExpense (als object in Klammer)
            description = "",
            note = "",
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        return database.ref("expenses").push(expense).then((ref) => {     // return used for promise-chaining when testing
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

export const removeExpense = ({ id } = {}) => ({        // destructuring used when getting an object/array
    type: "REMOVE_EXPENSE",
    id
})

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})
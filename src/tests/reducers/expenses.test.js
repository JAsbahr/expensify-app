import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

test("should setup expense reducer with default values", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" })
    expect(state).toEqual([])
})

test("should setup add expense", () => {
    const expense = {}
    const state = expensesReducer(expenses, { type: "ADD_EXPENSE", expense })
    expect(state).toEqual([
        ...expenses,
        expense
    ])
})

test("should remove expense by id", () => {
    const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: "1" })
    expect(state).toEqual([expenses[1], expenses[2]])
})

test("shouldn't remove by wrong id", () => {
    const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: "-1" })
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test("should edit an expense", () => {
    const description = "nice"
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe(description)
})

test("shouldn't edit with wrong id", () => {
    const description = "nice"
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("should set expenses", () => {
    const action = {
        type: "SET_EXPENSES", 
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})
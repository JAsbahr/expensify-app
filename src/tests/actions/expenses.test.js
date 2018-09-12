import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import database from "../../firebase/firebase"
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpense } from "../../actions/expenses"
import expenses from "../fixtures/expenses"

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {    // done needed cause beforeEach might not be completed before database.ref runs
    const expensesData = {}
    expenses.forEach(({ id, description, amount, note, createdAt }) => {
        expensesData[id] = { description, amount, note, createdAt }
    })
    database.ref("expenses").set(expensesData).then(() => done())
})

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" })
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("should setup edit expense action object", () => {
    const action = editExpense("123abc", { note: "New note" })
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: "New note"
        }
    })
})

test("should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})

test("should add expense to database and store", (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: "mouse",
        amount: 3000,
        note: "",
        createdAt: 334523452
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        // database.ref(`expenses/${actions[0].expense.id}`).once("value").then((snapshot) => {
        //    expect(snapshot.val()).toEqual(expenseData) 
        // })
        // done()
        return database.ref(`expenses/${actions[0].expense.id}`).once("value")  // promise chaining with return and double then()
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test("should add expense with defaults to database and store", (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: "",
        amount: 0,
        note: "",
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        // database.ref(`expenses/${actions[0].expense.id}`).once("value").then((snapshot) => {
        //    expect(snapshot.val()).toEqual(expenseData) 
        // })
        // done()
        return database.ref(`expenses/${actions[0].expense.id}`).once("value")  // promise chaining with return and double then()
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test("should setup set expense", () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses
    })
})

test("should fetch the expenses from firebase", (done) => {  // done used whenever async is used
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: "SET_EXPENSES",
            expenses
        })
        done()
    })
})

test("should remove expense from firebase", (done) => {
    const store = createMockStore({})
    store.dispatch(startRemoveExpense({ id: "1" })).then(() => {
        return database.ref("expenses/1").once("value")
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})
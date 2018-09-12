import React from "react"
import { shallow } from "enzyme"
import { EditPage } from "../../components/EditPage"
import expenses from "../fixtures/expenses"

let startEditExpense, startRemoveExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditPage
        startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[1]}
        />)
})

test("should render edit page", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should handle edit expense", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])
})

test("should handle start remove expense", () => {
    // wrapper.find("button").prop("onClick")()    funktioniert auch
    wrapper.find("button").simulate("click")
    expect(history.push).toHaveBeenLastCalledWith("/")
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id })
})
import React from "react"
import { shallow } from "enzyme"
import { EditPage } from "../../components/EditPage"
import expenses from "../fixtures/expenses"

let startEditExpense, history, wrapper

beforeEach(() => {
    startEditExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <EditPage
        startEditExpense={startEditExpense} history={history} expense={expenses[1]}
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

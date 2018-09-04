import React from "react"
import { shallow } from "enzyme"
import { ExpensesSummary } from "../../components/ExpensesSummary"

test("should render the ExpensesSummary correctly with 1 expense", () => {
    const result = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235}/>)
    expect(result).toMatchSnapshot()
})

test("should render the ExpensesSummary correctly with more than 1 expense", () => {
    const result = shallow(<ExpensesSummary expenseCount={23} expensesTotal={15324}/>)
    expect(result).toMatchSnapshot()
})
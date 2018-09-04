import React from "react"
import { connect } from "react-redux"
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/selectExpensesTotal";
import numeral from "numeral"

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses"
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <p>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</p>
        </div>
    )
}

const mapStatetoProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect(mapStatetoProps)(ExpensesSummary)
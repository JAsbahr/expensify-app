import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/selectExpensesTotal";
import numeral from "numeral"

export const ExpensesSummary = ({ visibleExpenseCount, visibleExpensesTotal, allExpenseCount, allExpensesTotal }) => {
    const expenseWord = visibleExpenseCount === 1 ? "expense" : "expenses"
    const expenseWordHidden = allExpenseCount === 1 ? "expense" : "expenses"
    const formattedVisibleExpensesTotal = numeral(visibleExpensesTotal / 100).format('$0,0.00')
    const formattedAllExpensesTotal = numeral((allExpensesTotal - visibleExpensesTotal)/ 100).format('$0,0.00')
    const hiddenExpensesCount = (allExpenseCount - visibleExpenseCount)
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{visibleExpenseCount}</span> {expenseWord} totalling <span>{formattedVisibleExpensesTotal}</span></h1>
                <p className="page-header__hidden"><span>{hiddenExpensesCount}</span> {expenseWordHidden} totalling <span>{formattedAllExpensesTotal}</span> hidden due to filters</p>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStatetoProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    return {
        visibleExpenseCount: visibleExpenses.length,
        visibleExpensesTotal: selectExpensesTotal(visibleExpenses),
        allExpenseCount: state.expenses.length,
        allExpensesTotal: selectExpensesTotal(state.expenses)
    }
}

export default connect(mapStatetoProps)(ExpensesSummary)
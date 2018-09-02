import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "./ExpenseListItem"
import getVisibleExpenses from "../selectors/expenses"

export const ExpenseList = (props) => ( // export for testing
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
             props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense} />
             })
            )
        }
    </div>
)

const mapStatetoProps = (state) => { 
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStatetoProps)(ExpenseList);  // HOC (kind of)
import React from "react";
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { addExpense } from "../actions/expenses"

export class AddPage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.history.push("/")
    }
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit} // props.dispatch(addExpense(expense)) code, bevor getestet werden musste
                />
            </div>
        )
    }
}


const mapDispatchtoProps = (dispatch) => ({                  // eingeführt, um leichter zu testen 
    addExpense: (expense) => dispatch(addExpense(expense))
})

export default connect(undefined, mapDispatchtoProps)(AddPage);
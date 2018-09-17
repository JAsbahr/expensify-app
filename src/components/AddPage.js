import React from "react";
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { startAddExpense } from "../actions/expenses"

export class AddPage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push("/")  //history can be used cause of react-router (this component is used in a router)
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
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchtoProps)(AddPage);
import React from "react";
import { connect } from "react-redux"
import ExpenseForm from "./ExpenseForm"
import { startRemoveExpense } from "../actions/expenses"
import { startEditExpense } from "../actions/expenses"
import RemoveModal from "./RemoveModal"

export class EditPage extends React.Component {
    state = {
        showModal: false
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense)
        this.props.history.push("/")
    }
    onRemove = () => {
        this.setState(() => ({
            showModal: true
        }))
    }
    onModalYes = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push("/")
        this.setState(() => ({
            showModal: false
        }))
    }
    onModalNo = () => {
        this.setState(() => ({
            showModal: false
        }))
    }
    

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove expense</button>
                </div>
                <RemoveModal 
                    showModal={this.state.showModal}
                    onModalYes={this.onModalYes}
                    onModalNo={this.onModalNo}
                />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => ({// Vereinfachung des Codes, damit besser getestest werden kann
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
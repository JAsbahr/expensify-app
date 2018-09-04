const selectExpensesTotal = (expenses) => {
    // if (expenses.length > 0) {
    //     return expenses.map((expense) => {
    //         return expense.amount
    //     }).reduce((a, b) => {
    //         return a + b
    //     }, 0)  // if no number given, reduce starts with the first item of the array
    // } else {
    //     return 0
    // }
    return expenses.map((expense) => {
        return expense.amount
    }).reduce((a, b) => {
        return a + b
    }, 0)       // test with empty array works because of the initialValue of 0
}

export default selectExpensesTotal
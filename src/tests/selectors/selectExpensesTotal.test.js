import selectExpensesTotal from "../../selectors/selectExpensesTotal"
import expenses from "../fixtures/expenses"

test("should add up with more than 1 expense", () => {
    const result = selectExpensesTotal(expenses)
    expect(result).toBe(24195)
})

test("should return 0 without expenses", () => {
    const result = selectExpensesTotal([])
    expect(result).toBe(0)
})

test("should work with only 1 expense", () => {
    const result = selectExpensesTotal([expenses[0]])
    expect(result).toBe(195)
})
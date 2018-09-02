import moment from "moment"
import filtersReducer from "../../reducers/filters"

test("should setup filter default value", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" }) // @@INIT is internally loaded by react-redux
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})

test("should setup filter by amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"})
    expect(state).toEqual({
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})

test("should setup filter by date", () => {
    const stateDefault = {
        text: "",
        sortBy: "amount",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    }
    const state = filtersReducer(stateDefault, {type: "SORT_BY_DATE"})
    // shorter version: expect(state.sortBy).toBe("date")
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
})

test("should setup set text filter", () => {
    const text = "my filter"
    const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER", text})
    expect(state.text).toBe(text)
})

test("should setup set start date", () => {
    const state = filtersReducer(undefined, {type: "SET_START_DATE", startDate: moment(0)})
    expect(state.startDate).toEqual(moment(0))
})

test("should setup set end date", () => {
    const state = filtersReducer(undefined, {type: "SET_END_DATE", endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0))
})
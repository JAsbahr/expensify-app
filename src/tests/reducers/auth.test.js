import authReducer from "../../reducers/auth"

test("should setup login action correctly", () => {
    const state = {}
    const uid = "123a"
    const action = authReducer(state, { type: "LOGIN", uid })
    expect(action).toEqual({
        uid
    })
})

test("should setup logout action correctly", () => {
    const state = { uid: "123s"}
    const action = authReducer(state, { type: "LOGOUT" })
    expect(action).toEqual({})
})
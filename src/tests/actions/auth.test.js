import { login, logout } from "../../actions/auth"

test("should test login action", () => {
    const action = login("122")
    expect(action).toEqual({
        type: "LOGIN",
        uid: "122"
    })
})

test("should test logout action", () => {
    const action = logout()
    expect(action).toEqual({
        type: "LOGOUT"
    })
})
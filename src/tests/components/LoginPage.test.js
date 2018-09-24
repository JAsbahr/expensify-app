import React from "react"
import { shallow } from "enzyme"
import { LoginPage } from "../../components/LoginPage"

test("should render login page correctly", () => {
    const wrapper = shallow(<LoginPage startLoginGoogle={() => { }}/>)
    expect(wrapper).toMatchSnapshot()
})

test("should call startLogin on button click", () => {
    const startLoginGoogle = jest.fn()
    const startLoginTwitter = jest.fn()
    const wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle} startLoginTwitter={startLoginTwitter} />)  //spy wird integriert
    wrapper.find("button").at(0).simulate("click")
    expect(startLoginGoogle).toHaveBeenCalled()
})
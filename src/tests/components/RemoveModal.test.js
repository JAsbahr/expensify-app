import React from "react"
import RemoveModal from "../../components/RemoveModal"
import { shallow } from "enzyme"

test("should handle start remove expense", () => {
    const onModalYes = jest.fn()
    const wrapper = shallow(<RemoveModal onModalYes={onModalYes} />)
    wrapper.find("button").at(0).simulate("click")
    expect(onModalYes).toHaveBeenCalled()
})

test("should handle user saying 'no'", () => {
    const onModalYes = jest.fn()
    const onModalNo = jest.fn()
    const wrapper = shallow(<RemoveModal onModalNo={onModalNo} />)
    wrapper.find("button").at(1).simulate("click")
    expect(onModalNo).toHaveBeenCalled()
})
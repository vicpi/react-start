import React from 'react'
import { shallow, mount } from 'enzyme'
import DeleteButton from './DeleteButton'

it('renders DeleteButton', () => {
    const onClick = jest.fn()
    shallow(<DeleteButton onClick={onClick} />)
})

it('should render a span with class "delete"', () => {
    const onClick = jest.fn()
    const wrapper = mount(<DeleteButton onClick={onClick} />)
    expect(wrapper.find('span').hasClass('delete')).toEqual(true)
})

it('should invoke onClick function when clicked', () => {
    const callback = jest.fn()
    const wrapper = shallow(<DeleteButton onClick={callback} />)
    wrapper.find('span').simulate('click')
    expect(callback.mock.calls.length).toEqual(1)
})
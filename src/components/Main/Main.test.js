import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Main from './Main'

it('should contain the div with class "Main"', () => {
    const wrapper = shallow(<Main />)
    expect(wrapper.find('div.Main')).toHaveLength(1)
})

it('should render the header with an <img> tag and <h1>', () => {
    const wrapper = shallow(<Main />)
    const header = wrapper.find('header.Main-header')
    expect(header).toHaveLength(1)
    const image = header.find('img')
    expect(image).toHaveLength(1)
    expect(image.hasClass('header-image')).toBeTruthy()
    expect(header.find('h1')).toHaveLength(1)
    expect(header.find('h1').text()).toEqual('React Start')
})

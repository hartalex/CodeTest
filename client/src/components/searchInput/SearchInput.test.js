import SearchInput from './SearchInput'
import {renderTest} from '../../util/renderTest'
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const mockStore = configureStore();

renderTest(SearchInput, mockStore())

it('renders input value', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const wrapper = mount(<SearchInput store={mockStore()}/>,
    {attachTo: div})
  const input = wrapper.find('input')
  input.instance().value = 'foo'
  input.simulate('keyUp', { keyCode:83, which:83, key: "s"});
  input.instance().value = ''
})

it('renders input no value', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const wrapper = mount(<SearchInput store={mockStore()}/>,
    {attachTo: div})
  const input = wrapper.find('input')
    input.simulate('keyUp', { keyCode:83, which:83, key: "s"});
})

it('renders input enter', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const wrapper = mount(<SearchInput store={mockStore()}/>,
    {attachTo: div})
  const input = wrapper.find('input')
  input.simulate('keyUp', {  keyCode:13, which:13, key: "Enter"} );
})

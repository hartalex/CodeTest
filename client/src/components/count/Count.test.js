import React from 'react'
import ReactDOM from 'react-dom'
import Count from './Count'
import {renderTest} from '../../util/renderTest'
renderTest(Count)

it('renders with 1000', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Count count={1000}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('renders with name', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Count name={'name'}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

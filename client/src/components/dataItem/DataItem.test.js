import React from 'react'
import ReactDOM from 'react-dom'
import DataItem from './DataItem'
import {renderTest} from '../../util/renderTest'

renderTest(DataItem)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DataItem hidden={true}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})

import React, { Component } from 'react'
import './Count.css'

const formatCount = (count) => {
  let retval = count
  if (count >= 1000) {
    retval = (Math.round(count/100)/10) + 'K'
  }
  return retval
}

class Count extends Component {
  render() {
    let name =''
    if (typeof this.props.name !== 'undefined') {
      name = this.props.name
    }
    let className = 'CountItem-' + name

    return (
      <li className='CountItem'>
        <div className={className}>
          {name}: {formatCount(this.props.count)}
        </div>
      </li>
    )
  }
}

export default Count

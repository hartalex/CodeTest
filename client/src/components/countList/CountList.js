import React, { Component } from 'react'
import Count from '../count/Count'
import './CountList.css'

class CountList extends Component {
  render() {
    let list = []
    if (this.props.list !== null && typeof this.props.list !== 'undefined') {
      list = this.props.list
    }
    let listItems = list.map((listItem) => {
      return (<Count key={listItem.name} name={listItem.name} count={listItem.count} />)
    })

    return (
      <ul className='CountList'>
        {listItems}
      </ul>
    )
  }
}

export default CountList

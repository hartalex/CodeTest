import React, { Component } from 'react'
import './Author.css'

class Author extends Component {
  render() {
    return (
      <div className='Author'>
        <a className='Author-url' href={this.props.authorURL} rel='nofollow'>
          <img className='Author-image' src={this.props.authorImage} alt={this.props.author} />
          <div className='Author-name'>{this.props.author}</div>
        </a>
      </div>
    )
  }
}

export default Author

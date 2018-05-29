import React, { Component } from 'react'
import './ModelView.css'

class ModelView extends Component {
  render() {
    // first load the thumbnail, then later display iframe over it.
    let modelStyle = {
       backgroundImage: 'url(' + this.props.thumbnail + ')'
    }

    return (
      <div className='Model' >
        <div className='Model-thumbnail' style={modelStyle}>
          <iframe className='Model-iframe' id={this.props.uid} title={this.props.name}
            src={this.props.modelviewer}
            frameBorder='0' allowFullScreen mozallowfullscreen='true'
            webkitallowfullscreen='true' onLoad={() => document.getElementById(this.props.uid).style.visibility = 'visible' } />
        </div>
      </div>
    )
  }
}

export default ModelView

import React, { Component } from 'react'
import Author from '../author/Author'
import CountList from '../countList/CountList'
import ModelView from '../modelView/ModelView'
import './DataItem.css'

class DataItem extends Component {
  render() {
    let className = 'DataItem clear-fix'
    if (this.props.hidden) {
      className = 'Hidden clear-fix'
    }
    let countList = [{'name':'Polygons', 'count':this.props.faceCount},
      {'name':'Vertices', 'count':this.props.vertexCount}]
    return (
      <li className={className}>
      <h2 className='DataItem-title'>{this.props.name}</h2>
        <ModelView uid={this.props.uid} name={this.props.name} modelviewer={this.props.modelviewer} thumbnail={this.props.thumbnail}/>
        <Author authorURL={this.props.authorURL} authorImage={this.props.authorImage} author={this.props.author}/>
        <p className='DataItem-description'>{this.props.description}</p>
        <CountList list={countList}/>
        <a className='DataItem-view' href={this.props.link} rel='nofollow'><div className='DataItem-viewText'>View on Sketchfab</div></a>
      </li>
    )
  }
}

export default DataItem

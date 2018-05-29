import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './DataList.css'
import DataItem from '../dataItem/DataItem'

// search author image list for the 32px size
// this is an unordered list,
// kick out of loop when we find the correct size
const findAuthorImage = (dataItem) => {
  let authorImage = ''
  let i = 0;
  while (i < dataItem.user.avatar.images.length && authorImage === '') {
    if (dataItem.user.avatar.images[i].width === 32) {
      authorImage = dataItem.user.avatar.images[i].url
    }
    i++
  }
  return authorImage
}

const findThumbnailImage = (dataItem) => {
  let thumbnailImage = ''
  // get a reasonable sized thumbnail image
  let i = 0;
  while (i < dataItem.thumbnails.images.length && thumbnailImage === '') {
    if (dataItem.thumbnails.images[i].width >= 448) {
      thumbnailImage = dataItem.thumbnails.images[i].url
    }
    i++
  }
  return thumbnailImage
}

const dataListRenderer = ({data}) => {
  if (data === null || typeof data === 'undefined') {
    data = []
  }
  let listItems = data.map((dataItem, index) => {
    return <DataItem key={index} uid={dataItem.uid} name={dataItem.name}
      description={dataItem.description} modelviewer={dataItem.embedUrl}
      link={dataItem.viewerUrl} vertexCount={dataItem.vertexCount}
      faceCount={dataItem.faceCount} author={dataItem.user.displayName}
      authorURL={dataItem.user.profileUrl} authorImage={findAuthorImage(dataItem)}
      thumbnail={findThumbnailImage(dataItem)} />
  })
    return (
      <ul className="DataList">
        {listItems}
      </ul>
    )
}

dataListRenderer.propTypes = {
  data: PropTypes.array
}

const mapStateToProps = function(state, props) {
  return {
    data: state.data
  }
}

const DataListComponent = connect(mapStateToProps)(dataListRenderer)


export default DataListComponent

import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './LoadMore.css'
import {apiFetchData} from '../../util/apiFetcher'
import {PAGE_SIZE} from '../../config'
import {getActions} from '../../redux/actions/actions'

const loadMoreRender = ({data_page, query, actions, hidden}) => {
  let className = "LoadMore"
  let offset = 0
  if (data_page === null ||
    typeof data_page === 'undefined' ||
    data_page.offset + PAGE_SIZE >= data_page.total || !hidden) {
    className = "LoadMoreHidden";
  }
  if (typeof data_page !== 'undefined') {
    offset = data_page.offset
  }
  return (
    <div id="LoadMore" className={className} onClick={() => { apiFetchData(query, offset + PAGE_SIZE, actions)}}>Load More</div>
  )
}

loadMoreRender.propTypes = {
  data_page: PropTypes.shape({
    total: PropTypes.number,
    offset: PropTypes.number,
    count:PropTypes.number
  }),
  query:PropTypes.string,
  actions: PropTypes.shape({
    fetchDataStart: PropTypes.func,
    fetchDataComplete: PropTypes.func,
    setError: PropTypes.func }),
  hidden: PropTypes.bool
}

const mapStateToProps = function(state, props) {
  return {
    data_page: state.data_page,
    query: state.query,
    hidden: state.loadingIsHidden
  }
}

const mapDispatchToProps = dispatch => {
  return getActions(dispatch)
}

const LoadMoreComponent = connect(mapStateToProps, mapDispatchToProps)(loadMoreRender)

export default LoadMoreComponent

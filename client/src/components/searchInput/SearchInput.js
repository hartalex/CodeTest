import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'whatwg-fetch'
import debounce from 'lodash.debounce'
import './SearchInput.css'
import {apiFetchData} from '../../util/apiFetcher'
import {getActions} from '../../redux/actions/actions'

const searchInputRenderer = ({actions}) => {
  var query = ''
  var debounceSearch = debounce(() => apiFetchData(query, 0, actions), 2000, false)
  return (
    <div className="SearchInputComponent">
      <input className="SearchInput" type="text" id="search"
        onKeyUp={(event) => {
         var searchBarValue = document.getElementById("search").value
         if (searchBarValue.length > 0) {
           query = encodeURIComponent(searchBarValue)
         } else {
           query = ''
         }
         // user pressed enter
         if (event.keyCode === 13) {
           debounceSearch.cancel()
           apiFetchData(query, 0, actions)
         } else {
           debounceSearch()
         }}}/>
    </div>
  )
}

searchInputRenderer.propTypes = {
  actions: PropTypes.shape({
    fetchDataStart: PropTypes.func,
    fetchDataComplete: PropTypes.func,
    setError: PropTypes.func })
}

const mapDispatchToProps = dispatch => {
  return getActions(dispatch)
}

const SearchInputComponent = connect(
  null,
  mapDispatchToProps
)(searchInputRenderer)

export default SearchInputComponent

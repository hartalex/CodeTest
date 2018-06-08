import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import SearchInput from '../searchInput/SearchInput'
import DataList from '../dataList/DataList'
import Loading from '../loading/Loading'
import Error from '../error/Error'
import {reduce} from '../../redux/reducers'
import LoadMore from '../loadMore/LoadMore'
import './App.css'

let store = createStore(reduce,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Search 3D Models</h1>
          <SearchInput />
          <p className="App-courtesy">Courtesy of <a href="https://sketchfab.com/" rel='nofollow'>Sketchfab</a></p>
        </div>
        <Error />
        <DataList />
        <LoadMore />
        <Loading />

      </div>
      </Provider>
    )
  }
}

export default App

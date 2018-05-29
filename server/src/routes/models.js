import {fetchJsonResponseHandler} from '../util/fetchJsonResponseHandler.js'
import fetch from 'isomorphic-fetch'
import {API_URL} from '../config'
import {queryParameter, filterData, sortData, limitData} from '../util/dataMassager'

export async function getModels(req, res) {
  // fetch from external api
  // const data = require('./api/sketchfab/test-data.js').results.models
  try {
    let response = await fetch(API_URL + req.query[queryParameter],
      {headers: {'Content-Type': 'application/json'}})
    let data = await fetchJsonResponseHandler(response)
    let filteredData = filterData(req, data.results)
    let sortedData = sortData(req, filteredData)
    let limitedData = limitData(req, sortedData)
    res.json(limitedData)
  } catch(error){
    res.status(500)
    if (typeof error === 'string') {
      res.json({error: {message: error}})
    } else {
      res.json({error: {message: error.message}})
    }
  }
}

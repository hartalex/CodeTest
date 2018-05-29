import {DEFAULT_OFFSET, DEFAULT_LIMIT, DEFAULT_SORT} from '../config'
// Setup reserved query parameters
// these are query parameters reserved for special purposes by the api
export const offsetParameter = 'offset'
export const limitParameter = 'limit'
export const sortParameter = 'sort'
export const queryParameter = 'q'
export const reservedQueryParameters = [offsetParameter, limitParameter, sortParameter, queryParameter]

export const filterData = (req, data) => {
  // Filter out reserved parameters, all that should be left are the data field names
  // used for filtering response data.
  var filterFields = Object.keys(req.query).filter((obj) => {
    return !reservedQueryParameters.includes(obj)
  })
  return data.filter((obj) => {
    return filterFields.reduce((accum, filterField) => {
      return accum && (obj[filterField] === req.query[filterField]);
    }, true)
  })
}

export const sortData = (req, data) => {
  // sort is the fields and which way to sort them.
  var sortQuery = req.query[sortParameter]
  if (typeof sortQuery !== 'string') { sortQuery = DEFAULT_SORT }
  var sortArray = sortQuery.split(',')
  return data.sort((a, b) => {
    let i = 0
    let result = 0
    while (i < sortArray.length && result === 0) {
      let sortField = sortArray[i]
      let sortDirection = sortField[0]
      let sortMultiplier = 1
      // determine sort direction based on first character
      // +name is sort ascending
      // -name is sort descending
      if (sortDirection === '+' || sortDirection === ' ') {
        sortMultiplier = 1
        sortField = sortField.substr(1)
      }else if (sortDirection === '-') {
        sortMultiplier = -1
        sortField = sortField.substr(1) }
        if (a[sortField] === undefined) { result = -1 }
        else if (b[sortField] === undefined){ result = 1 }
        else if (a[sortField] < b[sortField]) { result = -1 }
        else if (a[sortField] > b[sortField]) { result = 1 }
        result *= sortMultiplier
        i++ }
    return result })
}

const getNumber = (parameter, defaultValue) => {
  let retval = parseInt(parameter, 10)
  if (isNaN(retval)) { retval = defaultValue }
  if (retval < 0) { retval = 0 }
  return retval
}

export const limitData = (req, data) => {
  // offset is used in paging results
  let offset = getNumber(req.query[offsetParameter], DEFAULT_OFFSET)
  // limit is the maximum number of results to return
  let limit = getNumber(req.query[limitParameter], DEFAULT_LIMIT)
  if (offset > data.length) { offset = data.length }
  if (limit + offset >= data.length) { limit = data.length - offset }
  var limitedData = { 'result_total': data.length,
    'result_offset': offset,
    'result_count': limit,
    'data': []}

  for(var i = 0; i < limit; i++) { limitedData.data.push(data[offset+i]) }
  return limitedData
}

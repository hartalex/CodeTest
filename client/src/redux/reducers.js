import defaultAction from './reducers/default'
import fetchDataStart from './reducers/fetchDataStart'
import fetchDataComplete from './reducers/fetchDataComplete'
import setError from './reducers/setError'
import clearError from './reducers/clearError'

const initialState = {
  loadingIsHidden:true,
  error: null,
  data: [],
  data_page: {
    total:0,
    offset:0,
    count: 0
  },
  query:'',
  offset: 0
}

export default function reduce(state, action) {
  if (typeof state === 'undefined') { state = initialState }
  let nextState = {}
  switch(action.type) {
    case 'FetchDataStart':
      nextState = fetchDataStart(state, action)
      break;
    case 'FetchDataComplete':
      nextState = fetchDataComplete(state, action)
      break;
    case 'SetError':
      nextState = setError(state, action)
      break;
    case 'ClearError':
      nextState = clearError(state, action)
      break;
    default:
      nextState = defaultAction(state, action)
  }
  return nextState
}

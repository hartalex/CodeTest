import CountList from './CountList'
import {renderTest} from '../../util/renderTest'
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

renderTest(CountList, mockStore())

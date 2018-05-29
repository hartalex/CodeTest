import SearchInput from './SearchInput'
import {renderTest} from '../../util/renderTest'
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

renderTest(SearchInput, mockStore())

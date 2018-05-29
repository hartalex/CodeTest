import Loading from './Loading'
import {renderTest} from '../../util/renderTest'
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

renderTest(Loading, mockStore())

import LoadMore from './LoadMore'
import {renderTest} from '../../util/renderTest'
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

renderTest(LoadMore, mockStore())

import DataList from './DataList'
import {renderTest} from '../../util/renderTest'
import configureStore from 'redux-mock-store';
const mockStore = configureStore();

renderTest(DataList, mockStore())
renderTest(DataList, mockStore({'data':[{user:{avatar:{images:[{width:46}, {width:32}]}},
                   thumbnails:{images: [{width:46, url:'test'},{width:448, url:'test'}]}}]}))
renderTest(DataList, mockStore({'data':null}))

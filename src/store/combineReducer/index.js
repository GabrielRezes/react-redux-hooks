import { combineReducers } from 'redux';

import selectedProducts from '../reducers/cartReducer';
import counter from '../reducers/counterReducer';
import list from '../reducers/listReducer';

export default combineReducers({
    counter,
    list,
    selectedProducts,
});

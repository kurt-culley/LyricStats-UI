import {combineReducers} from 'redux';
import ChartReducer from './reducerChart';

const rootReducer = combineReducers({
    chart: ChartReducer,
    isLoading: false
});

export default rootReducer;

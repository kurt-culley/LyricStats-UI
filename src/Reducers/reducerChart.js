import {FETCH_CHART_DATA} from '../Actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CHART_DATA:
            return action.payload.data
    }
    return state;
}

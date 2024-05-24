import { createStore } from 'redux';

const initialState = {
    activeNav: '#home',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_NAV':
            return {
                ...state,
                activeNav: action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;

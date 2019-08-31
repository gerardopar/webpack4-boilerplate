// default reducer state:
const testDefaultstate = {};

//! boilerplate reducer:
const testReducer = (state = testDefaultstate, action) => {
    switch (action.type) {
        case 'SET_TEST':
            return {
                ...state,
                message: action.message
            };

        default:
        return state;
    }
};

export default testReducer;

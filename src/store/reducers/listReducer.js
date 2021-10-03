const INITIAL_STATE = {
    list : [],
};

function list ( state = INITIAL_STATE, action ) {
    
    switch (action.type) {
        
        case 'ADD_ITEM':
            return { ...state, list: [ ...state.list, action.payload]}
        
        case 'REMOVE_ITEM':
            return { ...state, list: state.list.filter( item => item.id !== action.payload)};

        default:
            return state;
    }
};

export default list;
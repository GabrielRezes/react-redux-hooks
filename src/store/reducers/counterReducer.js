const INITIAL_STATE = {
    counter: 0,
};

function counter ( state = INITIAL_STATE, action ) {

    switch (action.type){

        case 'INCREMENTAR':
            return { ...state, counter: state.counter + 1 };

        case 'DECREMENTAR':
            return { ...state, counter: state.counter - 1 };

        default: 
            return state;    

    };

};

export default counter
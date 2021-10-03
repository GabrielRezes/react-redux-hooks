const INITIAL_STATE = {
    selectedProducts: [],
};

function selectedProducts ( state = INITIAL_STATE, action ) {

    switch (action.type) {

        case 'ADD_PRODUCT':
            
        let item = { ...state, selectedProducts: [ ...state.selectedProducts, action.payload] };
        console.log(item)
            return { ...state, selectedProducts: [ ...state.selectedProducts, action.payload] };

        case 'REMOVE_PRODUCT':
            return { ...state, selectedProducts: state.selectedProducts.filter( item => item.id !== action.payload )};

        default:
            return state;

    };
};

export default selectedProducts;

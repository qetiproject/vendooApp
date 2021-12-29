const initialItemState = [ ];

const priceReducer = (state = initialItemState, action) => {
    switch(action.type) {
        case "SUCCESS":
            return [
                ...state, action.data
              ];
        default:
            return state
    }
}

export default priceReducer
const counterReducer = (state = {}, action) => {
    switch(action.type) {
        case "SUCCESS":
            return action.data
        default:
            return state
    }
}

export default counterReducer
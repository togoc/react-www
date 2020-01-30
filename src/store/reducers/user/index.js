import type from '../../type'
const init = {
}

export default (state = init, action) => {
    switch (action.type) {
        case type.SET_USER:
            state = action.data
            return state
        default:
            return state
    }
}
import { BUY_CAKE } from '../constants'


const initialState = {
    noOfCakes: 30
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCakes: state.noOfCakes - 4
            }
        default: return state

    }
}
export default loginReducer

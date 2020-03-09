import { STORE_DURATION, STORE_PLATFORM } from './constant';

const initialState = {
    platform: 25,
    duration: 'past_month'
};

const platformReducer = (state = initialState, action) => {
    switch (action.type) {
        case STORE_DURATION:
            return {
                ...state,
                duration: action.duration
            }
        case STORE_PLATFORM:
            return {
                ...state,
                platform: action.platform
            }
        default: return state
    }
}
export default platformReducer;
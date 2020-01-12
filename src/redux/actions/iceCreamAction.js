import { BUY_ICECREAM } from '../constants/iceCreamConstant';

export const iceCreamAction = (number = 1) => {
    return {
        type: BUY_ICECREAM,
        payload: number
    }
}

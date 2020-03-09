import { STORE_DURATION, STORE_PLATFORM } from './constant'

export const storePlatform = (platform) => {
    return {
        type: STORE_PLATFORM,
        platform
    }
}
export const storeDuration = (duration) => {
    return {
        type: STORE_DURATION,
        duration
    }
}
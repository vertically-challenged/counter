import { INCREMENT } from './types'

export function increment(count) {
    return {
        type: INCREMENT, 
        payload: count
    }
}
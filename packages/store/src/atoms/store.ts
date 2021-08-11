import { atomWithStorage } from 'jotai/utils'

export const countProductsAtom = atomWithStorage('countStore', 0)

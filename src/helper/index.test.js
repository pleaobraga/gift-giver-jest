import { maxNumber } from './index'

describe('maxNumber', () => {
    describe('given an empty array', () => {
        
        it('return 0', () => {
            expect(maxNumber([])).toEqual(0);
        })
        
    })

    describe('given an array numbers', () => {
        
        it('return ten nax numbers', () => {
            expect(maxNumber([1,2,3])).toEqual(3);
        })

    })
})
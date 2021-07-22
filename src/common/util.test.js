
import 'jest-enzyme';
import {
    checkIfArrayLengthMoreThanLimit,
} from './utils';

describe('Test checkIfArrayLengthMoreThanLimit', () => {
    const limit = 20;
    const moreThanlimit = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const lessThanlimit = [1, 2, 3, 1, 4];
    const emptyArr = [];
    test('1 test if function checkIfArrayLengthMoreThanLimit returns proper value if length >= limit', () => {
        const result = checkIfArrayLengthMoreThanLimit(moreThanlimit, limit);
        expect(result).toBeTruthy();
    })
    test('2 test if function checkIfArrayLengthMoreThanLimit returns false value if length < limit', () => {
        const result = checkIfArrayLengthMoreThanLimit(lessThanlimit, limit);
        expect(result).toBeFalsy();
    })
    test('3 test if function checkIfArrayLengthMoreThanLimit returns false value if length < limit', () => {
        const result = checkIfArrayLengthMoreThanLimit(emptyArr, limit);
        expect(result).toBeFalsy();
    })
})
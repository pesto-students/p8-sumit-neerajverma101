const mathOperations = require('./app');

describe('mathOperations', () => {
    describe('add', () => {
        it('should return the sum of two numbers', () => {
            expect(mathOperations.add(2, 3)).toBe(5);
        });
    });

    describe('subtract', () => {
        it('should return the difference of two numbers', () => {
            expect(mathOperations.subtract(5, 3)).toBe(2);
        });
    });

    describe('multiply', () => {
        it('should return the product of two numbers', () => {
            expect(mathOperations.multiply(2, 3)).toBe(6);
        });
    });
});

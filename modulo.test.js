const modulo = require('./modulo');

test('modulo(0) dovrebbe tornare 0', () => {
    expect(modulo(0)).toBe(0)
});
test('modulo(100) dovrebbe tornare 100', () => {
    expect(modulo(100)).toBe(100)
});
test('modulo(-100) dovrebbe tornare -100', () => {
    expect(modulo(-100)).toBe(100)
});

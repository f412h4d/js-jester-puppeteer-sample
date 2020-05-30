const {generateText} = require('./util');

test('should out put name and age', () => {
    const text = generateText('Amir', '21');
    expect(text).toBe('Amir (21 years old)')
});
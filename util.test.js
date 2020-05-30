const {generateText, checkAndGenerate} = require('./util');

// Unit Tests
test('should out put name and age', () => {
    const text = generateText('Amir', '21');
    expect(text).toBe('Amir (21 years old)');
});

test('test for null values', () => {
    const text = generateText();
    expect(text).toBe('undefined (undefined years old)');
})
// Unit Tests

//Integration Tests
test('should generate a valid text', () => {
    const text = checkAndGenerate('Amir', '21');
    expect(text).toBe('Amir (21 years old)');
})
//Integration Tests

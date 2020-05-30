const puppeteer = require('puppeteer');
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

// e2e Tests
test('should create an element with correct text', async () => {
    const browser = await puppeteer.launch({
            headless: false,
            slowMo: 80,
        }
    );
    const page = await browser.newPage();

    await page.goto(
        'file:///home/f4rh4d/Projects/js-testing-introduction/index.html'
    );

    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Anna (28 years old)');

    await page.screenshot({path: '/home/f4rh4d/tests/example.png'});

    await browser.close();
}, 10000);
// e2e Tests

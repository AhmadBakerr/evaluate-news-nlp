require('dotenv').config();

test('يجب أن يكون هناك API Key', () => {
    const apiKey = process.env.API_KEY;
    expect(apiKey).toBeDefined();
});

const { validateURL } = require('../src/client/js/formHandler'); // ✅ استيراد فقط

test('يجب أن يكون صحيحًا عند إدخال رابط صحيح', () => {
    expect(validateURL('https://www.example.com')).toBe(true);
});

test('يجب أن يكون خطأ عند إدخال نص عشوائي', () => {
    expect(validateURL('مقال اليوم')).toBe(false);
});

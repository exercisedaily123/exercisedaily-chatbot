module.exports = function detectLanguage(text) {
    const arabic = /[؀-ۿ]/;
    const cyrillic = /[А-Яа-яЁё]/;
    const chinese = /[一-鿿]/;
    const japanese = /[぀-ヿㇰ-ㇿ]/;
    const korean = /[가-힯]/;

    if (arabic.test(text)) return 'ar';
    if (cyrillic.test(text)) return 'ru';
    if (chinese.test(text)) return 'zh';
    if (japanese.test(text)) return 'ja';
    if (korean.test(text)) return 'ko';
    return 'en'; // default to English
};
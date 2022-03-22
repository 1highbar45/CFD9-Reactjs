export const currency = (num) => {
    return new Intl.NumberFormat('vn', { maximumSignificantDigits: 3 }).format(num);
}

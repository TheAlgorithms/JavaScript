var myAtoi = function(s) {
    s = s.trim();  // Remove leading and trailing whitespace
    if (s.length === 0) {
        return 0;  // Handle empty string case
    }
    let num = 0;
    let i = 0;
    let sign = 1;  // 1 for positive, -1 for negative
    if (s[i] === '+') {
        i++;
    } else if (s[i] === '-') {
        i++;
        sign = -1;
    }
    while (i < s.length && /^\d$/.test(s[i])) {
        num = num * 10 + parseInt(s[i]);
        i++;
    }
    num *= sign;
    num = Math.max(Math.min(num, Math.pow(2, 31) - 1), -Math.pow(2, 31));  // Check for integer overflow
    return num;
}
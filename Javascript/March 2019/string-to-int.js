var myAtoi = function(str) {
    if (!str.match(/^\s*(-|\+){0,1}\d+/)) return 0
    var num = parseFloat(str.split(/(\s|[^0-9-+])+/).filter(s => s.match(/\S/))[0])
    if (isNaN(num)) return 0
    if (num < -2147483648) return -2147483648
    if (num > 2147483647) return 2147483647
    return num
};
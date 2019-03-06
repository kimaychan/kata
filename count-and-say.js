/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n==1) return "1"
    var res = "1"
    for(let i=2; i<=n; i++) {
        res = (res.match(/(.)\1*/g)).reduce((res, v, k) => {
            return res+v.length+v[0]
        }, "")
    }
    return res
};

/* From Leetcode:
    Runtime: 64 ms, faster than 66.01% of JavaScript online submissions for Count and Say.
    Memory Usage: 35 MB, less than 92.80% of JavaScript online submissions for Count and Say.
*/

//03-06-19
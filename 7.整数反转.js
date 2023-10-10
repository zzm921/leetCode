/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let flag = false
    if (x < 0) {
        flag = true
        x = 0 - x
    }
    let s = (x + "").split("")
    let left = 0, right = s.length - 1
    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    let result = parseInt(s.reduce((s, item) => { return s + item }))
    if (result > Math.pow(2, 31)) {
        return 0
    }
    if (flag) {
        result = 0 - result
    }
    return result
};

reverse(123)
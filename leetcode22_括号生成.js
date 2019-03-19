/**
给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */


/**
* @param {number} n
* @return {string[]}
*/

let dps = (leftCount, rightCount, n, str, list) => {
    if (str.length === 2 * n) {
        if (leftCount === n && rightCount === n) {
            list.push(str)
        }
    } else {
        if (leftCount === rightCount) {
            dps(leftCount + 1, rightCount, n, str + '(', list)
        } else if (leftCount === n) {
            dps(leftCount, rightCount + 1, n, str + ')', list)
        } else {
            dps(leftCount + 1, rightCount, n, str + '(', list)
            dps(leftCount, rightCount + 1, n, str + ')', list)
        }
    }
}
var generateParenthesis = function (n) {
    let list = []
    if (n === 0) return []
    dps(0, 0, n, '', list)
    console.log(JSON.stringify(list))
    return list
};

console.log(generateParenthesis(3))
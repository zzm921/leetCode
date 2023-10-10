/**
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。



示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */


/**
* @param {string} digits
* @return {string[]} 
    深度优先搜索
*/

const obj = {
    '1': ' ',
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
}

let dfs = (digits, i, str, list) => {
    if (i === digits.length) {
        list.push(str)
    } else {
        for (let j = 0; j < obj[digits[i]].length; j++) {
            dfs(digits, i + 1, str + obj[digits[i]][j], list)
        }
    }
}


var letterCombinations = function (digits) {
    let list = []
    if (digits.length === 0) return list
    dfs(digits, 0, '', list)
    return list
};

console.log(letterCombinations('23'))
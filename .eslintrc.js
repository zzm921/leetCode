module.exports = {
    "extends": "standard",
    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    "rules": {
        // 'no-compare-neg-zero': 2,  //禁止与 -0 进行比较
        // 'no-cond-assign': 2, //禁止条件表达式中出现赋值操作符,
        //关闭额外的分号检查
        //0:关闭，1:警告，2:异常
        "semi": 0,
        //字符串必须使用单引号
        "quotes": [
            "error",
            "single"
        ],
        // 换行四个空格
        "indent": ["error", 4],
        "camelcase": 0,
        "no-eval": 1,
       
    }
}
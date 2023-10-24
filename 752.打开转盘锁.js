/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    //deads里面可能有相同内容，用set保持唯一
    let deads = new Set(deadends);
    // 记录已经穷举过的密码，防止走回头路，用set保持唯一
    let visited = new Set();
    let q=['0000']
    visited.add('0000')
    //visit用于记录已经入栈中的内容
    let depth=0
    while(q.length>0){
        let size=q.length
        for(let i=0;i<size;i++){
            let cur=q.shift()
            if(deads.has(cur)){
                continue
            }
            //如果为目标情况则返回深度
            if(cur===target){
                return depth
            }
            //四个数字 分别加减，一共八种情况
            for(let j=0;j<4;j++){  
                let indexNum=parseInt(cur[j])
                let curAdd=cur.substring(0,j)+(indexNum==9?0:indexNum+1)+cur.substring(j+1,4)
                let curSub=cur.substring(0,j)+(indexNum==0?9:indexNum-1)+cur.substring(j+1,4)
                if(!visited.has(curAdd)){
                    visited.add(curAdd)
                    q.push(curAdd)
                }
                if(!visited.has(curSub)){
                    visited.add(curSub)
                    q.push(curSub)
                }
            }
           
        }
        depth++
    }
    return -1
};
// @lc code=end


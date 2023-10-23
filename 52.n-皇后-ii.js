/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N 皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let result=0
    let tracks =[]
    //用一个数组记录n*n矩阵位置，
    let used=new Array(n).fill(0).map(()=>{ return new Array(n).fill('.')})
    let backtrack=function(n,h,used,tracks){
        if(h===n){
            result++
            return
        }
        for(let j=0;j<n;j++){
            if(!isOk(h,j,used)) continue
            used[h][j]='Q'
            //如果h行有可用值，则看n+1行是否有可用值
            backtrack(n,h+1,used,tracks)
            used[h][j]='.'
        }
    }
    //判断是否是可落位置
    let isOk=function(i,j,used){
        let n=used.length
        for(let a=0;a<n;a++){
                if(used[i][a]==='Q') return false
                if(used[a][j]==='Q') return false
        }
        //斜线 右边
        for(let a=i+1;a<n;a++){
            if(j-(a-i)>=0){
                if(used[a][j-(a-i)]==='Q') return false
            }
            if(j+(a-i)<n){
                if(used[a][j+(a-i)]==='Q') return false
            }
        }
         //斜线 左边
         for(let a=i-1;a>=0;a--){
            if(j-(i-a)>=0){
                if(used[a][j-(i-a)]==='Q') return false
            }
            if(j+(i-a)<n){
                if(used[a][j+(i-a)]==='Q') return false
            }
        }
        return true
    }
    backtrack(n,0,used,tracks)
    return result
};
// @lc code=end


/**
给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

 

示例 1：

输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoor" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。
示例 2：

输入：
  s = "wordgoodgoodgoodbestword",
  words = ["word","good","best","word"]
输出：[]
 */

 /**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
 
let inrc=(map,w)=>{
    if(map.get(w)){
        map.set(w,map.get(w)+1)
    }else{
        map.set(w,1)
    }
}
var findSubstring = function(s, words) {
    if(words.length===0) return []
let subStrlength=words[0].length
   let strlength=words.length*words[0].length
   if(strlength>s.length) return []
   let wordsMap=new Map()
   for (let w of words){
        inrc(wordsMap,w)
   }
   let indexs=[]
   for(let i=0;i<s.length-strlength+1;i++){
      let strMap=new Map()
      let left=i
      let right=i+strlength
      let flag=true
      while(left<right){
          let substr=s.substr(left,subStrlength)
          if((strMap.get(substr)&&strMap.get(substr)<wordsMap.get(substr))||(!strMap.get(substr)&&wordsMap.get(substr))){
              inrc(strMap,substr)
              left=left+subStrlength
          }else{
            flag=false
            break
          }
      }
       if(flag){
          indexs.push(i)  
       }
     
   }
   return indexs
}
findSubstring("wordgoodgoodgoodbestword",
["word","good","best","good"])
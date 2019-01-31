/*
编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
*/

//
var longestCommonPrefix = function(strs) {
    if(strs.length ===1) return strs[0];
    if(strs.length === 0) return "";

    let arrStr0 =  strs[0].split("");
    if(arrStr0.length === 0 ) return "";

    for(let j=0; j<arrStr0.length; j++){
        const index = j;

        for(let i =1; i<strs.length; i++){
            const compareStr = arrStr0.slice(0, index+1).join("");

            if(strs[i].substr(0, index+1) !== compareStr){
                return index === 0 ? "" : compareStr.substr(0, compareStr.length-1);
            }
        }
    }

    return strs[0];
};

const compareStrs = ["a","b","flight"];

console.log(longestCommonPrefix(compareStrs));
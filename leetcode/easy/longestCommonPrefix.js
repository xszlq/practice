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

// 上面的代码击败了5.02% js提交用户。。。 可想性能不是很好 待优化。

// 看了一下官方的解题思路两种思路
// 分治 把第一个字符串均分为两部分，每部分找到最长的公共字符串， 然后再从得到的两个字符串中找出最长的公共字符串
// 二分法 把第一个字符串分为两部分，把字符串均分为两部分，如果第一部分全部都是公串，则将下一部分均分为两等分再对比，直到不全是公共字符串为止。
// 采用算法 会使代码量加大，不过性能提上去了
var opt = function(){

};

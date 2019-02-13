/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 闭合检查
    // 顺序检查
    let check = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    let length = s.length;

    if(length === 0) return true;
    if(length%2 ===1) return false;

    if(length === 2){
        return s.charAt(1) === check[s.charAt(0)];
    }

    for(let i=0; i<length; i++){
        // 闭合检查
        let char = s.charAt(i);
        let nextChar = s.charAt(i+1);

        let mapSymbol = check[char];
        if(mapSymbol && nextChar !== mapSymbol){
            if(s.charAt(length-1) !== mapSymbol) return false;

            return isValid(s.substring(i+1, length-1))
        }
    }

    return true;
};

console.log(isValid("(([]){})"));

// []{} ([{]}) [()] [{()}]

// 写了上面的代码 可以处理简单的情况，复杂的情况还是有问题 算法设计有点问题！看一下官方给的算法思路
// 官方用的是栈来解决，确实很巧妙（不过吐槽一下官方的解决方案，前面写的一大段都是废话）
// 有思路了 自己实现一下

var opt = function(s){
    var stack = {
        arr: [],
        in: function(ele){
            let check = {
                "(": ")",
                "{": "}",
                "[": "]"
            };

            // 开符号 入栈
            if(check[ele]){
                this.arr.push(ele);
            }else{
                // 匹配符号
            }
        },
    }


};
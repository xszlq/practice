// 66题 加1

/**
 * @param {number[]} digits
 * @return {number[]}
 */

// 如果以将数组转换为数字然后+1再转换为数字 存在数字超出了Number边界的情况 故只能另寻思路了
var plusOne = function(digits) {
   let length = digits.length;

   for(let i=length-1; i>=0; i--){
       if(digits[i] === 9){
           digits[i] = 0;
           // 处理进位情况
           if(!digits[i-1]){
               digits.unshift(1)
           }
       }else{
           digits[i] = digits[i] +1;
           break;
       }
   }

   return digits;
};

console.log(plusOne([1,9,9,9]));
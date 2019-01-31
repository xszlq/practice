let valueMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arr = s.split("");
    let count = 0;

    arr.forEach((item, index)=>{
        if((item === "X" || item  === "V") && arr[index-1] === "I"){
            count  = count-2;
        }

        if((item === "L" || item  === "C") && arr[index-1] === "X"){
            count  = count-20;
        }

        if((item === "D" || item  === "M") && arr[index-1] === "C"){
            count  = count-200;
        }

        count+=valueMap[item];
    });

    return count;
};

console.log(romanToInt("III"));


/*
    题目描述：
* 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
* */

// 暴力解决
let twoSum = function(nums, target){
    console.time('twoSum');
    const length = nums.length;
    for(let i=0; i<length; i++){
        for(let j=i+1; j<length; j++){
            if(nums[i] + nums[j] === target){
                console.timeEnd('twoSum');
                return [i,j];
            }
        }
    }

    throw new Error("No two sum solution");
};

const arr1 = [2,7,11,15], target = 9;

console.log(twoSum(arr1, target));

// 上面的代码 为我的解决方案 时间复杂度为O(n^2),空间复杂度为O(1) 有优化空间
// 看到官方结题还有一种思路 利用哈希表来解决

let opt = function(nums, target){
    console.time('opt');
    let hashObj = {};
    for(let i=0; i<nums.length; i++){
        if(hashObj[nums[i]] ===undefined){
            hashObj[nums[i]] = i;
        }else{
            hashObj[nums[i]] += ',' + i;
        }

        let cut = target - nums[i];

        if(hashObj[cut] !== undefined && hashObj[cut] !== i){
            console.timeEnd('opt');
            let arr1 = hashObj[cut].toString().split(',');
            return [parseInt(arr1[0]), i]
        }
    }

    throw new Error("No two sum solution");
};

console.log(opt(arr1, target));

// 上面的代码 时间复杂度为O(n)和空间复杂度为O(n)
// 只是在写的时候要注意，利用js中的对象实现哈希的key值不能重复
// 还有就是hash值可能为数字或字符串两种类型一定要抹平，统一处理
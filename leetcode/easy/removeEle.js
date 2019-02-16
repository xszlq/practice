/**
 * Created by LiuQiang on 2019/2/16.
 */
var removeElement = function(nums, val) {
    let count = 0;
    let length = nums.length;
    for(let i=0;i<length; i++){
        if(nums[i-count] === val){
            nums.splice(i-count,1);
            count++;
        }
    }
    return nums.length;
};
console.log(removeElement([0,1,2,2,3,0,4,2]
,2));
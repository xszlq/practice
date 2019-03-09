/**
 * Created by LiuQiang on 2019/3/9.
 * 100 题
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

// 一种方式直接将二叉树转换成数组来对比 不过略感麻烦 递归调用直接对比二叉树 思路比较清晰实现也比较简单
var isSameTree = function(p, q) {
    if(p===null && q===null){
        return true;
    }

   if(p !== null && q!== null && p.val === q.val){
       return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
   }else{
       return false;
   }
};

// 将数组转换为二叉树 例如输入[1,2,3,4,5]
function arrToTree(arr){
    let trees = [];
    for(let i=0; i<arr.length; i++){
        trees.push(new TreeNode(arr[i]));
    }
    let treeIndex = 0;
    for(let j=1; j<arr.length; j++){
        if(trees[treeIndex].left === null){
            trees[treeIndex].left = trees[j];
        }else if(trees[treeIndex].right === null){
            trees[treeIndex].right = trees[j];
            treeIndex++;
        }
    }

    console.log(trees[0])
}

console.log(arrToTree([1,2,3,4,5,null,6]));


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
     this.val = val;
     this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    function getAllVal(listNode){
        let arr = [], nowNode = listNode;
        while(nowNode && nowNode.next !== undefined){
            arr.push(nowNode.val);

            if(nowNode.next === null) break;
            nowNode = nowNode.next;
        }

        return arr;
    }

    function arrToLink(arr){
        let nodes = arr.map(i=> new ListNode(i));

        for(let i=0; i<nodes.length; i++){
            if(nodes[i+1]) nodes[i].next = nodes[i+1];
        }

        return nodes[0] || [];
    }

    let allVal = getAllVal(l1).concat(getAllVal(l2));
    console.log(allVal);

    return arrToLink(allVal.sort());
};

function getAllVal(listNode){
    let arr = [], nowNode = listNode;
    while(nowNode.next !== null){
        arr.push(nowNode.val);
        nowNode = nowNode.next;
    }

    return arr;
}

let arr1 = [1,2,4], arr2 = [1,3,4];
// 将数组转换为链表
function arrToLink(arr){
    let nodes = arr.map(i=> new ListNode(i));

    for(let i=0; i<nodes.length; i++){
        if(nodes[i+1]) nodes[i].next = nodes[i+1];
    }

    return nodes[0] || [];
}


console.log(mergeTwoLists(arrToLink([]), arrToLink([])));
// 已知如下数组：
let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
const arrDeal = (arr)=>{
  if(!Array.isArray(arr)) return;
  let newArr = [];

  arr.forEach(i=>{
    if(Array.isArray(i)){
      newArr = newArr.concat(arrDeal(i))
    }else{
      newArr.push(i);
    }
  })

  return newArr;
}

const sortArr = arrDeal(arr).sort((a,b)=> a-b);

console.log([...new Set(sortArr)]);


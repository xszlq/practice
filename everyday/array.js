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


// 随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，
// 要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]

let arr1 = [2, 10, 3, 4, 5, 11, 10, 11, 20];

const createNewArr = (arr)=>{
  // 去重
  arr = [...new Set(arr)];

  // 排序
  arr = arr.sort((a,b)=> a-b);

  let splitA = [];


  arr.forEach((i, index)=>{
    if(arr[index+1]-i !== 1){
      splitA.push(index)
    }
  })

  return splitA.map((i, index)=>{
    return arr.slice(splitA[index-1] ? splitA[index-1] +1 : 0, i+1);
  })
}

console.log(createNewArr(arr1))


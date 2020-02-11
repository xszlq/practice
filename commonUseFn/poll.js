// 下面实现了一个轮训函数。
// 实现逻辑是：除非 fn 的调用返回真，否则每隔 interval ms 就再调用一次 fn，直到结果为真为止，然后返回结果；
// 如果调用时间过长，或调用出错，就报错返回。

/**
 *
 * @param fn 调用函数 可能是异步函数
 * @param time 调用频率
 * @param timeout 超时时间
 */
let poll = (fn, time, timeout)=>{
  let deadLine = timeout ? Date.now() + timeout : false;

  return new Promise((resolve, reject) => {
    let timer = setInterval(()=>{
      let result = fn();

      if(result){
        resolve(result)
        clearInterval(timer);
        return;
      }

      // 超过截止时间则停止轮训
      if(deadLine && Date.now() > deadLine){
        clearInterval(timer);
        reject("time out")
      }

    }, time)
  })
}


let add1 = 0;

let checkFn = function() {
  add1++;
  return add1 > 5
}

poll(checkFn, 100, 1000).then(res=>{
  console.log(add1);
}).catch(e=>{
  console.warn(e);
})
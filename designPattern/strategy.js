// 策略模式 主要解决有多种算法相似的情况 用if else导致代码的不好维护
// java 有接口 还是很好实现的 核心是算法的分离

let add = {
  exe(a, b){
    return a + b;
  }
}

let reduce = {
  exe(a,b){
    return a - b;
  }
}

let multi = {
  exe(a, b){
    return a*b;
  }
}

class Strategy{
  constructor (math){
    this.math = math;
  }

  exeStrategy(a, b){
    return this.math.exe(a, b)
  }
}


let addStrategy = new Strategy(add);
let reduceStrategy = new Strategy(reduce);
let multiStrategy = new Strategy(multi);

console.log('10 + 5 =', addStrategy.exeStrategy(10, 5))
console.log('10 - 5 =', reduceStrategy.exeStrategy(10, 5))
console.log('10 * 5 =', multiStrategy.exeStrategy(10, 5))

// 一个真实场景的例子 form表单校验 都是对输入进行校验 校验不通过 则返回校验不通过的消息
let validator = {
  // 空校验
  empty(value, errMsg){
    if(value === ""){
      return errMsg
    }
  },
  // 长度校验
  minLength(value, errMsg){
    if(value.length<6){
      return errMsg;
    }
  }
}
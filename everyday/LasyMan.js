class LasyMan{
  constructor (name){
    this.name = name;
    this.logStack = [];
    console.log("hi I am " + name);
  }

  eat(type){
    let doWhat = "I am eating " + type;

    this.logStack.push(doWhat);

    this.print(this.logStack.length)

    return this;
  }

  sleep(time){
    let doWhat = `等待了${time}秒`;

    this.logStack.push(doWhat);

    this.print(this.logStack.length)

    return this;
  }

  sleepFirst(time){
    let doWhat = `等待了${time}秒`;

    this.logStack.unshift(doWhat);

    this.print(this.logStack.length)

    return this;
  }

  print(len){
    setTimeout(()=>{
      if(len === this.logStack.length){
        this.logStack.forEach(i=>console.log(i))
      }
    })
  }
}

const tony = new LasyMan("Tony")

tony.eat('lunch').eat('dinner').sleepFirst(5).sleep(10).eat('junk food');

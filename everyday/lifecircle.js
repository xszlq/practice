
class Component{
  constructor (name, childs=[]){
    this.name = name;
    this.lc1();

    this.childs= childs.map(i=>new Component(i));

    this.lc2()

  }

  lc1(){
    console.log(this.name + ' lc start')
  }

  lc2(){
    console.log(this.name + ' lc end')
  }
}

let c1 = new Component('parent component', [
 'child1',
 'child2'
])
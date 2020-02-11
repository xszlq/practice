
let once = function(fn){
  let triggerTime = 0;

  return function(){
    if(triggerTime>1){
      return
    }

    triggerTime++;
    fn();
  }
}
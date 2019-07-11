let myStorage = {
  _map:{},
  getItem(key){
    return this._map[key]
  },
  setItem(key, value){
    this._map[key] = value;
  },
  clear(){
    this._map = new Object();
  },
}

myStorage.setItem("a", "aa");

console.log(myStorage.getItem("a"));
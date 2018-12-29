let obj1 = {
    a: "aa",
    b: "http://bb",
    c: "http://cc",
    d: 'dd',
    e: "ee",
    f: "ff"
};

const {a, b, c, d, e} = obj1;

const newObj = {
    a, b, c, d, e
};

const asyncArr = [];
const restObj = {};

for(let i in newObj){
    if(newObj[i].includes("http")){
        asyncArr.push([i, newObj[i]]);
    }else{
        restObj[i] = newObj[i]
    }
}

if(asyncArr.length>0){
    const promises = asyncArr.map(i=>{
        return new Promise(resolve => {
            console.log(i[1]);
            setTimeout(()=>{
                resolve({[i[0]]: Math.random()})
            }, 50)
        })
    });

    Promise.all(promises).then(res=>{
        const afterObj = Object.assign({}, ...res, restObj);
        console.log(afterObj);
    })
}


const STATE_SUCCESS = 'success';
const STATE_PENDING = 'pending';

class MyPromise {
    constructor(fn, state) {
        if (typeof fn === 'function') {
            this.fn = fn;

            this.fn.call(this, this.resolve.bind(this), this.reject.bind(this));

            this.state = STATE_PENDING;
        } else {
            // 传入的非函数 直接写入对应的状态
            this.state = state;
            this.successParam = fn;
        }

        // 存储then的回调函数
        this.thenFns = [];

        this.thenFnIndex = 0;
    }
    resolve(param) {
        console.log('resolve ', param);
        this.state = STATE_SUCCESS;
        this.successParam = param;
        this.then();
    }
    // todo
    reject() {

    }
    then(fn) {
        if (fn) {
            typeof fn === 'function' && this.thenFns.push(fn);
        }
        if (this.state === STATE_SUCCESS && this.thenFns.length > 0) {
            let rV = this.thenFns[this.thenFnIndex++](this.successParam);

            if (rV instanceof MyPromise) {
                rV.then(res=>{
                    this.successParam = res;
                    this.then();
                });
            } else {
                rV = MyPromise.resolve(rV, STATE_SUCCESS);

                this.successParam = rV.successParam;

                if (this.thenFns.length > this.thenFnIndex) {
                    // 递归调用
                    this.then();
                }
            }
        }
        return this;
    }
}

MyPromise.resolve = (param) => {
    return new MyPromise(param, STATE_SUCCESS)
};

/**
 * 写代码前还是得把需求弄清楚并把思虑理顺啊
 * 1.实现resolv和then
 * 2.实现链式 （缓存回调）
 * 3.异步链式实 先实现工具方法 MyPromise.resolve
 *
 */
const mp1 = new MyPromise((resolve) => {
    setTimeout(() => {
        resolve(11)
    }, 200)
});

mp1.then((res) => {
    console.log('then1 ', res);
    return "then1 " + res;
}).then((res) => {
    return new MyPromise(resolve => {
        setTimeout(() => {
            console.log('then2 ', res);
            resolve('then2 '+res);
        }, 100)
    });
}).then(res => {
    console.log('then3', res)
});
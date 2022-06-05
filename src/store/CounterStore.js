import { makeAutoObservable } from "mobx"
class CounterStore {
    // 数值状态
    count = 10

    constructor() {
        // 将参数对象的属性设置为 Observable State
        // 将参数对象的方法设置为 Action
        makeAutoObservable(this)
    }
    decrease(){
        this.count-=1
    }
    // 使数值+1
    increment() {
        this.count += 1
    }

    // 重置数值状态
    reset() {
        this.count = 0
    }
}

export default CounterStore

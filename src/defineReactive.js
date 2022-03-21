import Dep from './Dep'
import observe from './observe'
export default function defineReactive (data, key, val) {
    const dev = new Dep()
    console.log('我是defineReactive', data, key)
    if (arguments.length === 2) {
        val = data[key]
    }
    // 子元素进行observe，形成递归，这个递归不是函数自己调用自己
    // 而是多个函数、类循环调用
    let childOb = observe(val)
    Object.defineProperty(data, key, {
        // 可枚举
        enumerable: true,
        // 可以配置:比如可以delete
        configurable: true,
        get () {
            return val
        },
        set (newValue) {
            console.log('试图访问obj中的' + key + '属性', newValue)
            if (val === newValue)
                return
            val = newValue
            // 当设置了新值，这个新值也要被observe调用
            childOb = observe(newValue)
            dev.notify()
        }
    })
}

// 通过闭包来处理中转

// defineReactive(obj, 'a', 22)
// defineReactive(obj, 'b', 33)
// obj.a++
// console.log(obj.a)
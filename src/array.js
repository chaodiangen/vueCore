import { def } from "./utils"

const arrayPrototype = Array.prototype
// 以Array.prototype为原型创建arrayMethods对象
export const arrayMethods = Object.create(arrayPrototype)
// 要被改写的7个数组方法
const methodsNeedChange = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse']

methodsNeedChange.forEach(methodName => {
    // 备份原来方法
    const original = arrayPrototype[methodName]

    def(arrayMethods, methodName, function () {
        console.log('嘿嘿')
        // 恢复原来功能
        const result = original.apply(this, arguments)
        // 把类数组对象编变为对象
        const arr = [...arguments]
        /**
         *  把这个数组身上的__ob__取出来，__ob__已经添加了，为什么已经添加了？
         *  因为数据肯定不是最高层，比如obj.h属性是数组，obj不能是数组，第一次遍历obj这个对象
         *  的第一层的时候，已经给h属性添加了__ob__属性
         */
        const ob = this.__ob__
        // 有三种方法push\unshift\splice能够插入新项，闲杂要把插入的新项也要标称observe
        let inserted = []
        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = arguments
                break
            case 'splice':
                inserted = arr.slice(2)
                break
        }
        // 判断有没有要插入的新项，让新项也变为响应的
        if (inserted) {
            ob.observeArray(inserted)
        }
    }, false)
})


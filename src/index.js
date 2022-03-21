import observe from "./observe"
import { arrayMethods } from './array'
var obj = {}
// Object.defineProperty(obj, 'a', {
//     get () {
//         console.log('你试图访问obj中的a属性')
//         return 88
//     },
//     set (newValue) {
//         console.log('试图改变obj的属性', newValue)
//     }
// })
// Object.defineProperty(obj, 'b', {
//     value: 5
// })
// Object.defineProperty(obj, 'c', {
//     value: 7
// })
// console.log(obj.a)
// obj.a = 9
// console.log(obj.a)




// 假如obj不是空对象
var obj1 = {
    a: {
        b: {
            c: {
                d: 5
            }
        }
    },
    e: {
        f: {
            g: 10
        }
    },
    h: ['a', 'b', 'c', 'd', 'e']
}

// 创建observe函数，注意函数的名字没有r

observe(obj1)
obj1.h.push('f')
obj1.h.splice(2, 1, [0, 2])
obj1.h =[1]
console.log(obj1.h)
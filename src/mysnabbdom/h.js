import vnode from './vnode'
// 编辑一个低配版的h函数，必须接收三个参数， 相当于它的重载功能比较弱
/**
 * 
 * @param {节点} ele 
 * @param {*对象} data 
 * @param {*值} c 
 */
export default function (sel, data, c) {
    // 检查参数个数
    if (arguments.length !== 3) {
        throw new Error('sorry')
    }
    // 检查参数c
    if (typeof c === 'string' || typeof c === 'number') {
        return vnode(sel, data, undefined, c, undefined)
    } else if (Array.isArray(c)) {
        // 调用函数形态是2
        let children = []
        for (let i = 0; i < c.length; i++) {
            if (!(typeof c[i] === 'object' && c[i].hasOwnProperty('sel')))
                throw new Error('传入的数组中有项不是h函数')
            // 这里不用执行c[i] 因为测试语句中已经有了
            children.push(c[i])
        }
        return vnode(sel, data, children, undefined, undefined)
    } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
        // 调用h函数是形态3
        // 传入的c是唯一的children 不用执行c 测试语句已经执行了
        let children = [c]
        return vnode(sel, data, children, undefined, undefined)
    } else {
        throw new Error('传入的三个参数类型不对')
    }
}

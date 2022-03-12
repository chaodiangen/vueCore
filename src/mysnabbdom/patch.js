import vnode from "./vnode";
import createElement from "./createElement";
export default function (oldNode, newNode) {
    console.log('oldNode', oldNode)
    console.log('newNode', newNode)
    // 判断传入的第一个参数，是DOM节点还是虚拟节点
    if (oldNode.sel === '' || oldNode.sel === undefined) {
        // 传入的第一个参数是DOM节点，此时要包装成为虚拟节点
        oldNode = vnode(oldNode.tagName.toLowerCase(), {}, [], undefined, oldNode)
        console.log('包装虚拟节点', oldNode)
    }
    // 判读oldNode 和 newNode 是不是同一个节点
    if (oldNode.key === newNode.key && oldNode.sel === newNode.sel) {
        console.log('同一个', oldNode.key)
    } else {
        console.log('不是同一个，暴力删除 ')
        let newNodeElm = createElement(newNode)
        // 插入老节点之前
        oldNode.elm.parentNode.insertBefore(newNodeElm, oldNode.elm)

    }
}
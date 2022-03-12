// 真正创建节点 将vnode创建DOM  但是是孤儿节点
export default function createElement (vnode) {
    console.log('vnode', vnode)
    // 创建一个DOM节点
    let domNode = document.createElement(vnode.sel)
    // 子节点和文本
    if (vnode.text !== '' && (vnode.children === undefined || vnode.children.length === 0)) {
        domNode.innerText = vnode.text
        // 补充elm属性
        vnode.elm = domNode
    } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {

    }
    // elm属性是一个纯dom
    return vnode.elm
}
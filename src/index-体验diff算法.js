import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
]);
const btn = document.getElementById('btn')
//   创建虚拟节点
var myNnode1 = h('a', { props: { href: "https://www.baidu.com" } }, '百度')
const container1 = document.getElementById("container1")
const vnode1 = h('ul', {}, [
    h('li', '1'),
    h('li', '2'),
    h('li', '3')
])
const vnode2 = h('ul', {}, [
    h('li', {}, '1'),
    h('li', {}, '2'),
    h('li', {}, '3'),
    h('li', {}, '4')
])
//   虚拟节点上树
patch(container1, vnode1)
patch(container1, vnode2)
btn.onclick = function () {
    patch(vnode1, vnode2)
}

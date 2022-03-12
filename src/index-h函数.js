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
//   创建虚拟节点
  var myNnode1 = h('a',{props:{href:"https://www.baidu.com"}},'百度')
  const container1 = document.getElementById("container1")
  const myNnode3 = h('ul',[
      h('li','苹果'),
      h('li','苹果'),
      h('li',h('div',[h('p','11'),h('p','11')]))
  ])
  //   虚拟节点上树
  patch(container1,myNnode3)
  const container = document.getElementById("container");
  const vnode = h("div#container.two.classes", { on: { click: function(){} } }, [
    h("span", { style: { fontWeight: "bold" } }, "This is bold"),
    " and this is just normal text",
    h("a", { props: { href: "/foo" } }, "I'll take you places!"),
  ]);
  // Patch into empty DOM element – this modifies the DOM as a side effect
  patch(container, vnode);
  
  const newVnode = h(
    "div#container.two.classes",
    { on: { click: anotherEventHandler } },
    [
      h(
        "span",
        { style: { fontWeight: "normal", fontStyle: "italic" } },
        "This is now italic type"
      ),
      " and this is still just normal text",
      h("a", { props: { href: "/bar" } }, "I'll take you places!"),
    ]
  );
  // Second `patch` invocation
  patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state
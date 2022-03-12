import h from './mysnabbdom/h.js'
import patch from './mysnabbdom/patch.js'

const myVnode1 = h('p', {}, '你好')
const container = document.getElementById('container1')
patch(container,myVnode1)
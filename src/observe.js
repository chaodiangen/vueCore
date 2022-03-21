import Observer from "./Observer"
const observe = function (value) {
    // 如果value 不是对象，什么都不做
    if (typeof value !== 'object') return
    // 定义ob
    var ob;
    if (typeof value.__ob__ !== 'undefined') {
        ob = value.__ob__
    } else {
        ob = new Observer(value)
    }
}
export default observe
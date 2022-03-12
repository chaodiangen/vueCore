/**
 * 功能是可以在dataObj对象中，寻找用连续点符号的keyName属性
 * 需要师表a.b.c
 */
export default function lookup(dataObj, keyName) {
    // 首先查看keyName 中有没有点符号 但是不能是本身
    if (keyName.indexOf('.') !== -1 && keyName !== '.') {
        var keys = keyName.splice('.')
        // 设置临时变量周转一层一层找下去 
        let temp = dataObj
        for (let i = 0; i < keys.length; i++) {
            temp = temp[keys[i]]
        }
        return temp
    }
    return dataObj[keyName]
}
import lookup from "./lookup"
import renderTemplate from "./renderTemplate"
/**
 * 处理数组 结合renderTemplate实现递归
 * 这个是函数接收的token
 */

export default function parseArray(token, data) {
    // 得到整体数据中这个数据的使用部分
    var v = lookup(data, token[1])
    var resultStr = ''
    // 遍历数组v 
    // 注意遍历数据而不是tokens
    for (let i = 0; i < v.length; i++) {
        resultStr += renderTemplate(token[2], {
            ...v[i],
            '.': v[i]
        })
    }
    return resultStr
}
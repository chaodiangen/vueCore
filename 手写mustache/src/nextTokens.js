/**
 * 
 * @param {*} tokens 
 */
export default function nestTokens(tokens) {
    // 结果数组
    var nestTokens = []
    // 栈结构 栈顶 （靠近端口，最新进入） 的token数组中当前操作的这个tokens小数组
    var sections = []
    // 收集器 天生指向nestedTokens结果数组，引用类性质，所以指向的是同一个数组
    // 收集器指向会变化 当遇到#时候，收集器会指向token为2的新数组
    var collector = nestTokens
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        switch (token[0]) {
            case '#':
                // 收集器放入token
                collector.push(token)
                // 压栈
                sections.push(token)
                // 收集器换人
                collector = token[2] = []
                break
            case '/':
                // 出栈 pop()返回刚刚弹出的项
                sections.pop()
                // 改变收集器为栈结构队尾，那项下标为2的数组
                collector = sections.length > 0 ? sections[sections.length - 1][2] : nestTokens
                break;
            default:
                collector.push(token)
                break
        }
    }
    return nestTokens
}
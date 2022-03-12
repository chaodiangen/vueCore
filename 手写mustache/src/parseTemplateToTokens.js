// parseTemplateToTokens.js
import Scanner from './Scanner.js'
import nestTokens from './nestTokens' // 后面会解释

// 函数 parseTemplateToTokens
export default templateStr => {
    const tokens = []
    const scanner = new Scanner(templateStr)
    let word
    while (!scanner.eos()) {
        word = scanner.scanUntil('{{')
        word && tokens.push(['text', word]) // 保证 word 有值再往 tokens 里添加
        scanner.scan('{{')
        word = scanner.scanUntil('}}')
        /** 
         *  判断从 {{ 和 }} 之间收集到的 word 的开头是不是特殊字符 # 或 /, 
         *  如果是则这个 token 的第一个元素相应的为 # 或 /, 否则为 name
         */
        word && (word[0] === '#' ? tokens.push(['#', word.substr(1)]) :
            word[0] === '/' ? tokens.push(['/', word]) : tokens.push(['name', word]))
        scanner.scan('}}')
    }
    return nestTokens(tokens) // 返回折叠后的 tokens, 详见下文
}

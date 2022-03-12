import lookup from './lookup'
import parseArray from './parseArray'

/**
 * 
 */
export default function renderTemplate(tokens, data) {
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        let resultStr = ''
        //看类型
        if (token[0] === 'text') {
            resultStr = token[i]
        } else if (token[0] === 'name') {
            // 防止“a.b.c”
            resultStr += lookup(token[1])
        } else if (token[0] === '#') {
            resultStr += parseArray(token, data)
        }
    }
    return resultStr
}

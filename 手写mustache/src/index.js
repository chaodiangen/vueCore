import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from './renderTemplate'
import parseArray from './parseArray'
window.CDG_TemplateEngine = {
    render(templateStr, data) {
        var tokens = parseTemplateToTokens(templateStr)
        // 调用renderTemplate函数，让token数组变为dom字符串
        var domStr = renderTemplate(tokens, data)
        return domStr
    }
}

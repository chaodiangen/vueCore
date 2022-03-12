/**
 * 扫描类
 */
export default class Scanner {
    constructor(templateStr) {
        console.log('构造器', templateStr)
        this.templateStr = templateStr
        this.pos = 0
        // 尾巴  一开始就是模本原文
        this.tail = templateStr
    }
    // 功能弱，就是路过内容，没有返回值
    scan(tag) {
        if (this.tail.indexOf(tag) === 0) {
            // tag有多长，就让指针后移多少位a 
            this.pos += tag.length
            this.tail = this.templateStr.substring(this.pos)
        }
    }
    // 让指针扫描，直到遇见指定内容结束，并且能够给返回结束之前路过的文字
    scanUtile(stopTag) {
        // 开始的时候不是stopTag的时候，到最后的全部字符
        const post_backup = this.pos
        while (this.tail.indexOf(stopTag) != 0 && this.eos()) {
            // 指针移动
            this.pos++;
            // 改变尾巴为从当前指针从这个字符开始，直到最后一个字符
            this.tail = this.templateStr.substring(this.pos)
        }
        // 返回扫描的字符串，不包括this.pos
        return this.templateStr.substring(post_backup, this.pos)
    }
    // 指针到头
    eos() {
        // 返回一个布尔值
        return this.pos >= this.templateStr.length
    }
}
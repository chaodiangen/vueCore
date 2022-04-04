var uid = 0
export default class Dep {
    constructor() {
        console.log('Dep构造器')
        this.id = uid++
        // 用数组存贮自己的订阅模式，subs订阅者的意思
        this.subs = [] //watch 实例 
    }
    // 添加
    addSub (sub) {
        this.subs.push(sub)
    }
    // 添加依赖
    depend () {
        // target 目标 就是我们指定的全局位置
        if (Dep.target) {
            this.addSub(Dep.target)
        }
    }
    // 更新
    notify () {
        console.log('notify')
        // 浅克隆
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}
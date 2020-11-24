/* 
    Dep：一个存储依赖的地方
*/
var window = require('./window')

window = {
    a: 'naaa'
}

console.log(window)

class Dep {
    constructor() {
        this.subs = []
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    removeSub(sub) {
        removeSub(this.subs, sub)
    }
    depend() {
        if(window.target) {
            this.addSub(window.target)
        }
    }
    notify() {
        let subs = this.subs.slice()
        for(let i = 0; i < subs.length; i++) {
            subs[i].update() // 我是搞不明白这update是什么玩意
        }
    }
}

function remove(arr, item) {
    if(arr.length) {
        let index = arr.indexOf(item)
        if(index > -1) {
            return arr.splice(index, 1)
        }
    }
}

module.exports = Dep
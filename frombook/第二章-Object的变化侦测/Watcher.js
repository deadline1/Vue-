const parsePath = require('./parsePath')
var window = require('./window')

console.log(window)
window = {
    a: 'xxx'
}

module.exports = class Watcher {
    constructor(vm, expOrFn, cb) {
        this.vm = vm
        // 执行this.getter()，可以访问data.a.b.c的内容
        this.getter = parsePath(expOrFn)
        this.cb = cb
        this.value = this.get()
    }

    get() {
        window.target = this
        let value = this.getter.call(this.vm, this.vm)
        window.target = undefined
        return value
    }

    update() {
        let oldvalue = this.value
        this.value = this.get()
        this.cb.call(this.vm, this.value, oldvalue)
    }
}
const Watcher = require('./Watcher')
const Dep = require('./Dep')
const parsePath = require('./parsePath')
const Observer = require('./Observer')
const defineReactive = require('./defineReactive')

let obj = {
    c: {
        name: 'dddd',
        copyname: 'ddd'
    },
    name: 'deadline1'
}
// console.log(parsePath('name')(obj))

defineReactive(obj, 'name', 'new')

let watcher1 = new Watcher(obj, 'c.name', function() {
    console.log('触发watcher1函数')
})

console.log(obj.name)

obj.name = '1'

// let observe1 = new Observer(obj)
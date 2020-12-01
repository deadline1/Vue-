import Dep from './Dep.js'
import Observer from './Observer.js'
export function defineReactive(data, key, val) {
    if(typeof val === 'object') {
        new Observer(val)
    }
    let dep = new Dep()
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            dep.depend()
            return val
        },
        set: function(newVal) {
            if(val === newVal) {
                return
            }
            val = newVal
            dep.notify()
        }
    })
}
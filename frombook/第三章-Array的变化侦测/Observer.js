import Dep from './Dep.js'
import {defineReactive} from './defineReactive.js'
export default class Observer {
    constructor(value) {
        this.value = value
        def(value, '__ob__', this)

        if(Array.isArray(value)) {
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    walk(obj) {
        const keys = Object.keys(obj)
        for(let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], obj[keys[i]])
        }
    }

    observeArray(items) {
        for(let i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }
}

// 工具函数
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}
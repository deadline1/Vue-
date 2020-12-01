/* 模块自带的部分 */
var exports = {}
var module = {
    exports: exports
}

/* 我们对模块的操作 */

/* 实例1 -> 正确 */
// module.exports = {
//     name: 'doublege'
// }

// /* 实例2 -> 正确 */
// exports.name = 'doublege'

// /* 实例3 -> 错误*/
exports = {
    name: 'doublege'
}

console.log(exports)
console.log(module)

let o = {
    name: 'ddd'
}

function change(obj) {
    obj = {
        x: 1
    }
}

let o2 = o
o2 = {
    s: 'sss'
}

// change(o)
console.log(o)

// 按共享传递
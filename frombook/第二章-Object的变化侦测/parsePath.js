const bailRE = /[^\w.$]/
function parsePath(path) {
    if(bailRE.test(path)) {
        return
    }
    const segments = path.split('.')
    return function(obj) { // 返回一个方法，用于获取对象中具体的值
        for(let i = 0; i < segments.length; i++) {
            if(!obj) return
            obj = obj[segments[i]]
        }
        return obj
    }
}

module.exports = parsePath
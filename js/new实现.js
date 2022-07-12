function F (name, age) {
    this.name = name
    this.age = age
}
// const f1 = new F('唐诗逸', '18')
// console.log(f1.age)

// const f2 = F('唐诗逸', '18')
// console.log(window.age)

function _new () {
    const obj = {}

    const constructor = [].shift.call(arguments)

    obj.__proto__ = constructor.prototype

    const res = constructor.apply(obj, arguments)

    return typeof res === 'object' ? res : obj
}

const f1 = _new(F, '宁雨昔', '30')
console.log(f1.name)

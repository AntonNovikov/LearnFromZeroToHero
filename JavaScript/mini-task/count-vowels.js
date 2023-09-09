// need fix
const func = str => {
    const reg = str.match(/[aeiouy]/gi)
    return reg ? reg.length : 0
}

// bug yes - y consonant
// yes

// yam

// yell

// yellow

// yogurt

// beyond
console.log(func("yes"))


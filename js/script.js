let doc = document
let calc = doc.querySelector(".calc-wrap")
let stepen2 = doc.querySelector("#btn-1")
let C = doc.querySelector("#btn-2")
let razdelit = doc.querySelector("#btn-3")
let stepen = doc.querySelector("#btn-4")
let procent = doc.querySelector("#btn-5")
let plus = doc.querySelector("#btn-6")
let minus = doc.querySelector("#btn-7")
let umnojit = doc.querySelector("#btn-8")
let seven = doc.querySelector("#btn-9")
let eight = doc.querySelector("#btn-10")
let nine = doc.querySelector("#btn-11")
let four = doc.querySelector("#btn-12")
let five = doc.querySelector("#btn-13")
let six = doc.querySelector("#btn-14")
let one = doc.querySelector("#btn-15")
let two = doc.querySelector("#btn-16")
let three = doc.querySelector("#btn-17")
let zero = doc.querySelector("#btn-18")
let dot = doc.querySelector("#btn-19")
let ravno = doc.querySelector("#btn-20")
let input = doc.querySelector("input")
let input2 = doc.querySelector(".input2")
function fn(a, b) { a.onclick = () => { input.value += b } }
fn(zero, 0), fn(one, 1), fn(two, 2), fn(three, 3), fn(four, 4), fn(five, 5), fn(six, 6), fn(seven, 7), fn(eight, 8), fn(nine, 9)
C.onclick = () => {
    input.value = ""
    input2.value = ""
}
stepen2.onclick = () => {
    input.value = Math.pow(input.value, 2)
}
function value() {
    input2.value = input.value
    input.value = ""
}
plus.onclick = () => {
    value()
    ravno.onclick = () => {
        input.value = parseInt(input.value) + parseInt(input2.value)
        input2.value = ""
    }
}
minus.onclick = () => {
    value()
    ravno.onclick = () => {
        input.value = parseInt(input2.value) - parseInt(input.value)
        input2.value = ""
    }
}
umnojit.onclick = () => {
    value()
    ravno.onclick = () => {
        input.value = parseInt(input2.value) * parseInt(input.value)
        input2.value = ""
    }
}
razdelit.onclick = () => {
    value()
    ravno.onclick = () => {
        input.value = parseInt(input2.value) / parseInt(input.value)
        input2.value = ""
    }
}
stepen.onclick = () => {
    value()
    ravno.onclick = () => {
        input.value = Math.pow(input2.value, input.value)
        input2.value = ""
    }
}
procent.onclick = () => {
    input.value += "%"
}
dot.onclick = () => {
    input.value += "."
}
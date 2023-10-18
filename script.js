
const result = document.querySelector('.d')
const inp1 = document.querySelector('.num1')
const inp2 = document.querySelector('.num2')
const bb = document.querySelector('.bb')
const minus = document.querySelector('.min')
const plus = document.querySelector('.pl')
const MM = document.querySelector('.MM')
const PP = document.querySelector('.PP')

let plMi = '+'
plus.onclick = function P(){
    plMi = '+'
}
minus.onclick = function M(){
    plMi = '-'
}
PP.onclick = function P(){
    plMi = '*'
}
MM.onclick = function M(){
    plMi = '/'
}


bb.onclick = function a () {
    let sum
switch (plMi) {
    case "+":
        sum = Number(inp1.value) + Number(inp2.value)
        break;

    case "-":
        sum = Number(inp1.value) - Number(inp2.value)
        break;

        case "*":
            sum = Number(inp1.value) * Number(inp2.value)
            break;
    
        default:
            sum = Number(inp1.value) / Number(inp2.value)
            break;
}



 result.textContent = sum
 if (sum > 0) {
    result.style.color = 'green'
 }
 else if (sum < 0) {
    result.style.color = 'red'
 }
}

let list = document.querySelectorAll('.item')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

console.log(prev)
console.log(next)


// contagem = 3
// item = 0, 1, 2 -> morango, laranja, abacate

let contagem = list.length // vai retornar os 3 itens
let active = 0

console.log(list)

next.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active >= contagem -1 ? 0 : active +1
    list[active].classList.add('active')
}

prev.onclick = () => {
    let activeOld = document.querySelector('.active')
    activeOld.classList.remove('active')

    active = active <= 0 ? contagem -1 : active -1
    list[active].classList.add('active')
}


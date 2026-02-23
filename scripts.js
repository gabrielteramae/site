const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const items = document.querySelectorAll(".item")
const list = document.querySelector(".list")
const total = items.length

let active = 0

// const = valor constante, ou seja, não pode ser reatribuída. 
// let = valor variável, ou seja, pode ser reatribuída.

prevButton.addEventListener("click", function () {
    update(-1)
})

nextButton.addEventListener("click", function () {
    update(1)
})

function update(direction) {
    document.querySelector(".item.active").classList.remove("active")

    if (direction > 0) {
        active = active + 1

        if (active === total) {
            active = 0
        }
    }

    else if (direction < 0) {
        active = active - 1

        if (active < 0) {
            active = total - 1
        }
    }

    items[active].classList.add("active")

}
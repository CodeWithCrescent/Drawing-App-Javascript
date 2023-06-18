$(function(){

const canvas = document.getElementById('canvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")

// ctx.fillStyle = 'red'
// ctx.fillRect(100, 100, 100, 100)

// window.addEventListener("mousemove", (e) => {
//     console.log("Mouse X: " + e.clientX)
//     console.log("Mouse Y: " + e.clientY)
// })

let prevX = null
let prevY = null

ctx.lineWidth = 5

let draw = false

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clearInterval.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

//Saving Drawing
let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("download/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw) {
        prevX = e.clientX
        prevY = e.clientY
        return
    }
// Current Mouse Position
    let currentX = e.clientX
    let currentY = e.clientY
// Drawing a line from the Prev Mouse Position to Current Position
    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()
// Update Prev Mouse Position
    prevX = currentX
    prevY = currentY
})
})
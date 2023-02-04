var canvas = document.getElementById("myCanvas")
console.log(canvas)
ctx = canvas.getContext("2d")
var color = "red"
var mouse_event = "mt"
var width_of_line = 1
canvas.addEventListener("touchstart", my_touchstart)
var width = screen.width
var new_width = screen.width - 70
var new_height = screen.height - 300
if (width < 992) {
    document.getElementById("myCanvas").width = new_width
    document.getElementById("myCanvas").height = new_height
    document.body.style.overflow = "hidden"
}
function my_touchstart(e) {
    mouse_event = "mousedown"
    color = document.getElementById("color").value
    width_of_line = document.getElementById("Width_of_line").value
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop
}
canvas.addEventListener("touchmove", my_touchmove)
var last_position_of_x, last_position_of_y
function my_touchmove(e) {
    var current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft
    var current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width_of_line
    ctx.moveTo(last_position_of_x, last_position_of_y)
    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y)
    ctx.stroke()

    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y
}
function clear_area() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
// $selector().accion()

// $(document).ready(() => {
//     $(h1).hide()
// })

$(() => {
    // Selectores:
    // id = "el-1" => "#el-1"

    //$("#el-1").hide()
    //$(".show-btn").hide()

    $(".hide-btn").click(() => {
        console.log("Ocultando...")
        //$("h1").hide()
        $("h1").fadeOut()
    })

    $(".show-btn").click(() => {
        console.log("Mostrando...")
        //$("h1").show()
        $("h1").fadeIn()
    })

    $("li").click(() => {
        $("h1").css({ color: "red"})
    })

    $("li").dblclick(() => {
        $("h1").css({ color: "blue"})
    })

    $(".new-element").click(() => {
        //$("ul").append("<li>New Element</li>")
        $("ul").prepend("<li>New Element</li>")
    })

    $("li").mouseenter(() => {
        console.log("Ha entrado el ratón (hover)")
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "yellow"
    })

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })

})
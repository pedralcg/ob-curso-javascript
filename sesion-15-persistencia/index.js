// localStorage.setItem("nombre","Pedro")
// localStorage.setItem("nombre","Julia")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({nombre: "Pedro", edad: 34}))

console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

localStorage.removeItem("nombre")
localStorage.removeItem("persona")




sessionStorage.setItem("nombre-sesion", "Pedro")

// Cookies

//document.cookie = "nombreCookie=PedroCookie"

document.cookie = "nombreCookie=PedroCookie; expires=" + new Date(2025, 7, 1).toUTCString()

console.log(document.cookie)
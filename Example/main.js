let heading = document.querySelector("#btnMenu")
let btnClos= document.querySelector("#btnClose")
let button = document.querySelector("#ull")


heading.addEventListener("click", function(){
    ull.style.display = "flex"
    heading.style.display = "none"
    btnClos.style.display = "flex"

})

btnClos.addEventListener("click", function(){
        ull.style.display = "none"
        btnOpen.style.display = "flex"
        btnClos.style.display = "none"
})







let btnOpen = document.querySelector("#btnMenu")
let btnClos = document.querySelector("#btnClose")
let links = document.querySelector("#links")


btnOpen.addEventListener("click", function(){

    links.style.display = "flex"
    btnOpen.style.display = "none"
    btnClos.style.display = "flex"
    
})


btnClos.addEventListener("click", function(){
    links.style.display = "none"
      btnOpen.style.display = "flex"
    btnClos.style.display = "none"

})
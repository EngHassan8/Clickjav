let btnOpen= document.querySelector("#btnMenu")
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


///////////////////////////////


let allImages = document.querySelectorAll("img")
let nextButton = document.querySelector("#btnNext")
let backbutton = document.querySelector("#bntBack")
   


let counter = 0

allImages.forEach(function (image, index){
    image.style.left = `${index * 100}%`                
})

function showImage (){
    allImages.forEach(function (data){
        data.style.transform= `translatex(-${counter * 100}%)`
    })

}

nextButton.addEventListener("click", function(){
   
    counter++
    showImage()
    

   
})

backbutton.addEventListener("click", function(){
   
        counter--
        showImage()

    
   
})
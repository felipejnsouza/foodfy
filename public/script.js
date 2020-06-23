const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal-overlay")

for(let card of cards){
    card.addEventListener("click", ()=> {
    
    modal.classList.add("active")
    modal.querySelector("img").src = card.querySelector(".foto img").src
    modal.querySelector(".dishName h3").innerHTML = card.querySelector(".dishName h3").innerHTML
    modal.querySelector(".author p").innerHTML = card.querySelector(".author p").innerHTML

})
}

// document.querySelector(".close-modal a").addEventListener("click", ()=>{
//     modal.classList.remove("active")
// })
const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal-overlay")

for(let card of cards){
    card.addEventListener("click", ()=> {
    
    cardId = card.getAttribute("id")
        
    window.location.href = `recipe?id=${cardId}`
    
})
}

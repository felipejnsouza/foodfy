const cards = document.querySelectorAll(".card")

for(let card of cards){
    card.addEventListener("click", ()=> {
    
    cardId = card.getAttribute("id")
        
    window.location.href = `recipe?id=${cardId}`
    
})
}

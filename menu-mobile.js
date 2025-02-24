var burguer = document.querySelector('.menu-burguer')
var linha1burguer = document.querySelector('.linha1-menu')
var linha2burguer = document.querySelector('.linha2-menu')
var menumob = document.querySelector('.menumobile')

burguer.addEventListener("click", ()=>{
    console.log('ok')
    linha1burguer.classList.toggle("linha1ativo")
    linha2burguer.classList.toggle("linha2ativo")
    menumob.classList.toggle("menumobativo")
})
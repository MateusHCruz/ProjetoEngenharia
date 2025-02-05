
let navbar = document.querySelector('#header')




window.addEventListener("scroll", ()=>{
    let scrollTop = window.scrollY

    

    if (scrollTop > 0){
        navbar.classList.add('rolar')
        line1.classList.add('rline1')
        line2.classList.add('rline2')
        console.log(line1.classList); // Verifica as classes de .line-1
        console.log(line2.classList);
        console.log('ok')
    } else{
        navbar.classList.remove('rolar')
        line1.classList.remove('rline1')
        line2.classList.remove('rline2')
    }
})
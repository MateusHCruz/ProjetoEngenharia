
    let line1 = document.querySelector('.line-1');
    let line2 = document.querySelector('.line-2');
    let menu = document.querySelector('#menu-burguer'); 
    let navAberta = document.querySelector('#navopen')
    let body = document.querySelector('html')



    
        menu.addEventListener("click", () => {  
            line1.classList.toggle('ativo1');
            line2.classList.toggle('ativo2');
            navAberta.classList.toggle('navAbertaAtiva');  
            
            body.classList.toggle('noscroll')
        });
    

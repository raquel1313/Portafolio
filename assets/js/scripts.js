var barra =document.getElementById('barra');
window.addEventListener('scroll',()=>{
    var scroll = window.scrollY

    if(scroll>10){
        barra.style.backgroundImage =' linear-gradient(180deg, #010b47 40%, #010b47 80%)'
    } else{
        barra.style.backgroundImage =' linear-gradient(180deg, #28282800 40%, #28282800 80%)'
    }
})

    const fadeInAnimation = (element, callback,fadeElement=null) =>{
    const navHeight = document.querySelector('nav').getBoundingClientRect().height;
    let execute = true;
    window.addEventListener('scroll', ()=>{
        if(element.getBoundingClientRect().top-navHeight<=1 && execute){
            if(fadeElement){
                execute = false
                callback(fadeElement)  
            }else{
                execute = false
                callback(null)
            }
        }
    })
}

export default fadeInAnimation;



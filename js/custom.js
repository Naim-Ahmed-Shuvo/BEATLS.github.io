$(document).ready(()=>{
    console.log("ready");
    $(".hamburgur-menu").on("click",()=>{
        $(".mobile-nav").slideToggle()
        
    })

    $(".scroll-top").on("click",()=>{
        $('html,body').animate({
            scrollTop:0
        },2000)
    })
    
})

document.querySelector(".hamburgur-menu").addEventListener("click",()=>{
    if(document.querySelector(".hamburgur-menu").classList.contains("open-menu")){
        document.querySelector(".hamburgur-menu").classList.remove("open-menu")
    } else{
        document.querySelector(".hamburgur-menu").classList.add("open-menu")
    }
})

const scrollUpBtn = document.querySelector(".scroll-top")
window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        scrollUpBtn.classList.add("show")
    } else{
        scrollUpBtn.classList.remove("show") 
    }
})

// scrollUpBtn.addEventListener("click",()=>{
//     window.scroll(0,0)
// })
const dropDown1 = document.getElementById("drop-down1")
const dropDown2 = document.getElementById("drop-down2")
const dropDown3 = document.getElementById("drop-down3")
const dropDown4 = document.getElementById("drop-down4")
const dropDown5 = document.getElementById("drop-down5")
const dropDown6 = document.getElementById("drop-down6")
const upBtn1 = document.getElementById("up-btn1")
const upBtn2 = document.getElementById("up-btn2")
const upBtn3 = document.getElementById("up-btn3")
const upBtn4 = document.getElementById("up-btn4")
const upBtn5 = document.getElementById("up-btn5")
const upBtn6 = document.getElementById("up-btn6")
const hidden = document.querySelector(".hidden")
const hidden2 = document.querySelector(".hidden2")
const hidden3 = document.querySelector(".hidden3")
const hidden4 = document.querySelector(".hidden4")
const hidden5 = document.querySelector(".hidden5")
const hidden6 = document.querySelector(".hidden6")

dropDown1.addEventListener("click", function(){
  hidden.classList.remove("hidden")
  dropDown1.style.display = "none"
  upBtn1.style.display ="inline-block"
  
  
})

dropDown2.addEventListener("click", function(){
  hidden2.classList.remove("hidden2")
  dropDown2.style.display = "none"
  upBtn2.style.display ="inline-block"
})
dropDown3.addEventListener("click", function(){
    hidden3.classList.remove("hidden3")
    dropDown3.style.display = "none"
    upBtn3.style.display ="inline-block"
    
    
  })
  
  dropDown4.addEventListener("click", function(){
    hidden4.classList.remove("hidden4")
    dropDown4.style.display = "none"
    upBtn4.style.display ="inline-block"
  })
  dropDown5.addEventListener("click", function(){
    hidden5.classList.remove("hidden5")
    dropDown5.style.display = "none"
    upBtn5.style.display ="inline-block"
    
    
  })
  
  dropDown6.addEventListener("click", function(){
    hidden6.classList.remove("hidden6")
    dropDown6.style.display = "none"
    upBtn6.style.display ="inline-block"
  })

upBtn1.addEventListener("click", function(){
  hidden.classList.add("hidden")
  upBtn1.style.display = "none"
  dropDown1.style.display ="inline-block"
})
upBtn2.addEventListener("click", function(){
  hidden2.classList.add("hidden2")
  upBtn2.style.display = "none"
  dropDown2.style.display ="inline-block"
})

upBtn3.addEventListener("click", function(){
    hidden3.classList.add("hidden3")
    upBtn3.style.display = "none"
    dropDown3.style.display ="inline-block"
  })
  upBtn4.addEventListener("click", function(){
    hidden4.classList.add("hidden4")
    upBtn4.style.display = "none"
    dropDown4.style.display ="inline-block"
  })
  upBtn5.addEventListener("click", function(){
    hidden5.classList.add("hidden5")
    upBtn5.style.display = "none"
    dropDown5.style.display ="inline-block"
  })
  upBtn6.addEventListener("click", function(){
    hidden6.classList.add("hidden6")
    upBtn6.style.display = "none"
    dropDown6.style.display ="inline-block"
  })
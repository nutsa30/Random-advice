const h4=document.getElementById("h4")
const box=document.getElementById("box")
const p=document.getElementById("p")



const getAdvice= async() =>{
    const response=await fetch ("https://api.adviceslip.com/advice")
    const advice=await response.json()
    
    console.log(advice)
    


    p.textContent= '"' + (advice.slip.advice) + '"'
   

}


getAdvice()



let num=1

h4.textContent = "A D V I C E #" + num;

const diceBtn=document.getElementById("diceBtn")
diceBtn.addEventListener("click",()=>{
   
    num++
    h4.textContent = "A D V I C E #" + num;

    getAdvice()
    
})

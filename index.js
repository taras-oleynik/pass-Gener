const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passResponce1 = document.getElementById("generatedPassOne")
let passResponce2 = document.getElementById("generatedPassTwo")
let genrCustBtn = document.getElementById("cusbtn")
let getPasslength = document.getElementById("passLength")

function generatePass(){
    passResponce1.textContent = ""
    passResponce2.textContent = ""
    for(let i = 0 ; i< 15; i++){
        let index1 = Math.floor(Math.random()*characters.length)
        passResponce1.textContent += characters[index1]  
    }
  for(let i = 0 ; i< 15; i++){
        let index2 = Math.floor(Math.random()*characters.length)
        passResponce2.textContent += characters[index2]  
    }
   
}

function custom(){
   let usersInputNum = parseInt(getPasslength.value)
   passResponce1.textContent = ""
  passResponce2.textContent = ""
    for(let i = 0 ; i< usersInputNum; i++){
        let index1 = Math.floor(Math.random()*characters.length)
        passResponce1.textContent += characters[index1]  
    }
  for(let i = 0 ; i< usersInputNum; i++){
        let index2 = Math.floor(Math.random()*characters.length)
        passResponce2.textContent += characters[index2]  
    }

}
genrCustBtn.addEventListener("click",custom);
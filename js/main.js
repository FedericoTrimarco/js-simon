/* 
    - Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

    - Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

    - Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/
const containerNum = document.querySelector('.random-numbers');
const containerTimer = document.querySelector('.timer');

let randomNum = [];
for(let i = 0; i < 5; i++){
    let num = randomNumber();
    randomNum.push(num);
    containerNum.innerHTML +=`<h2>${i+1}°Numero: ${randomNum[i]}</h2>`
}
console.log(randomNum);
let second = 3;

let myNumbers = [];
const timer = setInterval( ()=>{
    containerTimer.innerHTML = `<h1>${second}</h1>`
    if(second === 0){
        clearInterval(timer)
        containerNum.innerHTML =''
        for(let i = 1; i <= randomNum.length; i++){
           const newNum = parseInt(prompt(`inserisci il ${i}° Numero:`)) 
           console.log(newNum);
           myNumbers.push(newNum);
        }
        console.log(myNumbers);
    } else{
        second--
    }
},1000);




function randomNumber(){
   return Math.floor(Math.random() * 999) + 1;
}
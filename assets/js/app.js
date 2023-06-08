const datalist = document.querySelector("#datalist");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const inputdialog = document.querySelector("#inputdialog");

/*let contentAnswer = document.querySelector("#dialoganswer");
const word = contentAnswer.textContent;
const length = word.length;
let count = 0;
contentAnswer.textContent = "";

const write = setInterval(() => {
    contentAnswer.textContent += word[count]
    count += 1;
    if(count > length -1){
        clearInterval(write)
    }
    console.log(count);
}, 100);
*/
console.log("coucou from apijs")
fetch("https://chatbotstjoback.onrender.com/api/v1/dialogs")
.then(response=>response.json())
.then(data=>{
    data.message.forEach(dialog => {
        datalist.innerHTML += `<option value="${dialog.question}">`
    })

    inputdialog.addEventListener("change", e=>{
        question.innerHTML=document.querySelector(".form-question").value
        data.message.forEach(dialog =>{
            if(e.target.value === dialog.question){
                console.log(dialog.answer)
                answer.innerHTML = dialog.answer
            }
        })
    })
})
.catch(error=>console.log(error))

const dialogs=[
    {question:"Salut",answer:"Coucou"}, 
    {question:"Qui est deuxième de Ligue 1 saison 2022/2023?", answer:"Lens "}, 
    {question:"Quel age as tu?", answer:"Je suis un robot je n'est pas d'âge j'ai été créé en juin 2023"},
    {question:"Qui a gagné la coupe du monde 2018?", answer:"France"},
    {question:"Quel est ton parc préférer?", answer:"Je ne sais pas choisir entre Disney et Asterix"},
    {question:"Iphone ou Androïd?", answer:"Iphone"},
    {question:"Dans quelle cours as tu été crée?", answer:"En application répartie"},
    {question:"Le meilleur voyage selon toi?", answer:"La Grèce"},
]

inputdialog.addEventListener("change", function(event){
    event.preventDefault();
    question.innerHTML=document.querySelector(".form-question").value
    answer.innerHTML="Coucou"
    dialogs.forEach(element =>{
        if(element.question === document.querySelector(".form-question").value){
            answer.innerHTML=element.answer
        }
    })
})

dialogs.forEach((dialog) =>{
    datalist.innerHTML += `<option value="${dialog.question}">`;
});
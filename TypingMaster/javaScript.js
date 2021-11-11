const setWords = ["Word-prediction is a software programme which operates within a word processing programme during the typing process", 
    "As soon as a user begins to type a new word, a word list menu is filled with possible words that match the typed letter or ",
    "If the user selects one of the suggested words through a mouse click or the relevant coded function key on the keyboard",
    "that word is inserted into the text, and the user can proceed to type the next word The essence of the spelling support offered", 
    "word-prediction appears to be that the spelling skill of encoding words letter by letter is being replaced by the letters.",
    "possibility of selecting the word rather than forming the word the spelling skill of encoding words letter by letter is being"];

const msg = document.getElementById("msg");
const typeWords = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () =>{
    let randomNumber = Math.floor(Math.random()*setWords.length)
    msg.innerText = setWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
    typeWords.value = "";
}
const endPlay = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/1000);
    let totalStr= typeWords.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount/totalTime) * 60);
    let finalMsg = "Total words typed at speed: " + speed + " words per minutes ";
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;
}
const compareWords = (str1,str2)=>{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let count = 0;
    words1.forEach(function(item,index){
        if(item == words2[index]){
            count++;
        }
    })
    let errorWords = (words1.length - count);
    return ("\n Correct Words: " + count + " , Total Words: "+ words1.length + " , Total Errors: "+ errorWords);
}

const wordCounter = (str) =>{ 
    let response = str.split(" ").length;
    return response;
}
btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
})





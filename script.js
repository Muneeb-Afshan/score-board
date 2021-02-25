var button1 = document.querySelector("#ctr1")
var p1s = document.querySelector("#score1")
var score1 = 0

var button2 = document.querySelector("#ctr2")
var p2s = document.querySelector("#score2")
var score2 = 0

var set = 1
var reset = document.querySelector("#reset")
var winner = document.querySelector("#winner")

button1.addEventListener("click",function(){
    
    var limit = document.querySelector("#limit").value;
    score1++;

    p1s.textContent = score1;

    if(score1==limit || (score1> score2 && score1>limit)){
        p1s.classList.add("green");
        button1.setAttribute("disabled","true")
        button2.setAttribute("disabled","true")

        printWinner()
        scoreInsert()
    }

})

button2.addEventListener("click",function(){
    
    var limit = document.querySelector("#limit").value;
    score2++;

    p2s.textContent = score2;

    if(score2==limit || (score1> score2 && score1>limit)){
        p2s.classList.add("green");
        
        button1.setAttribute("disabled","true")
        button2.setAttribute("disabled","true")

        printWinner()
        scoreInsert()
    }

})


reset.addEventListener("click",function(){
    button1.removeAttribute("disabled")
    button2.removeAttribute("disabled")

    p1s.classList.remove("green")
    p2s.classList.remove("green")

    score1=0
    score2=0

    p1s.textContent =  score1;
    p2s.textContent =  score2;

    document.querySelector("#limit").value = 5;

    winner.textContent=""
})

function printWinner(){
    if(score1>score2){
        winner.textContent = "Player 1"
    }
    else{
        winner.textContent = "Player 2"
    }

}

function scoreInsert() {
    var table = document.getElementById("tab");
    var row = table.insertRow(set);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = set;
    console.log(set);
    cell2.innerHTML = score1;
    cell3.innerHTML = score2;
    set++;
  }

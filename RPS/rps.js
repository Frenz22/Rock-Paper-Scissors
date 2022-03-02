
let user_score = 0;
let computer_score = 0;
const user_score_span = document.getElementById("user-score");
const computer_score_span = document.getElementById("computer-score");
const scoreboar_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function win(user_choice, computer_choice) {
    const small_user_word = "user".fontsize(3).sub();
    const small_computer_word = "computer".fontsize(3).sub();
    const user_choice_div = document.getElementById(user_choice);
    user_score ++;
    result_div.innerHTML = convert(user_choice) + small_user_word + " beats " +  convert(computer_choice) + small_computer_word + " You win!";
    user_score_span.innerHTML = user_score;
    user_choice_div.classList.add("green-glow");
    setTimeout(function() { user_choice_div.classList.remove("green-glow")}, 500)
}

function lose(user_choice, computer_choice){
    const small_user_word = "user".fontsize(3).sub();
    const small_computer_word = "computer".fontsize(3).sub();
    const user_choice_div = document.getElementById(user_choice);
    computer_score ++;
    result_div.innerHTML = convert(user_choice) + small_user_word + " losses to "+ convert(computer_choice) + small_computer_word + " You lost!";
    computer_score_span.innerHTML = computer_score;
    user_choice_div.classList.add("red-glow");
    setTimeout(function() { user_choice_div.classList.remove("red-glow")}, 500)
}

function draw(user_choice, computer_choice){
    const small_user_word = "user".fontsize(3).sub();
    const small_computer_word = "computer".fontsize(3).sub();
    const user_choice_div = document.getElementById(user_choice);
    result_div.innerHTML = convert(user_choice) + small_user_word + "  equals  " + convert (computer_choice)+ small_computer_word + " Draw!";    
    user_choice_div.classList.add("gray-glow");
    setTimeout(function() { user_choice_div.classList.remove("gray-glow")}, 500)
}


function game(user_choice) {    //game
    let computer_choice = get_computer_choice();
    switch (user_choice + computer_choice){
        case "sp":
        case "pr":
        case "rs":
            win(user_choice, computer_choice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(user_choice, computer_choice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(user_choice, computer_choice)
            break;
          
    }

}


function get_computer_choice() {   // get random compchoice from (rps)
    const choices = ['r', 'p', 's'];
    const random_number = Math.floor(Math.random() * 3);
    return choices[random_number];  
}
   
function convert(letter)  {     //convert RPS to word
    if(letter  == "r") return "Rock";
    if(letter  == "s") return "Scissors";
    return "Paper";
 }
     

function main(){    // userchoice
    rock_div.addEventListener("click", function(){
        game("r");
    })

    scissors_div.addEventListener("click", function(){
        game("s");
    })

    paper_div.addEventListener("click", function(){
        game("p");
    })
 }
let user_choice = main();












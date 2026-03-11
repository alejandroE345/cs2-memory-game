console.log("Script Started");

//Defining variables for each card and the guesses
let guesses = 0;
let firstCardId = "";
let secondCardId = "";

//Flips card, revealing text
function flipCard(cardId) {
    //Shows when user clicks each time
    console.log("click");
    //Finds cards by ID
    let card = document.getElementById(cardId);
    //Changes text color for each card
    card.style.color = "whitesmoke";
    //Changes the background color for each card
    card.style.backgroundColor = "rgb(21, 131, 21)";

    //Check if this is their first choice
    if(firstCardId == "") {
        //Store first card ID
        firstCardId = cardId;
    }
    else {
        //Check second card
        secondCardId = cardId;

        //Check if cards match
        setTimeout(checkForMatch, 400);
    }
    

    
}

    function checkForMatch() {
        let card1 = document.getElementById(firstCardId);
        let card2 = document.getElementById(secondCardId);
        console.log(card1);
        console.log(card2);

        if(card1.innerText == card2.innerText) {
            console.log("match");
            card1.style.backgroundColor = "green";
            card2.style.backgroundColor = "green";
        }
        else {
            card1.style.backgroundColor = "rgb(8, 68, 8)";
            card1.style.color = "rgb(8, 68, 8)";
            card2.style.backgroundColor = "rgb(8, 68, 8)";
            card2.style.color = "rgb(8, 68, 8)";
        }
    }
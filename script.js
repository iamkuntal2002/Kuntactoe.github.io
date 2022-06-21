console.log("Welcome to Tic Tac Toe")
let turn = "X"  //first turn for X
let isgameover = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"   //if the current turn is for X then next for O
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],         //first row
        [3, 4, 5, 5, 15, 0],        //sec row
        [6, 7, 8, 5, 25, 0],        //third row
        [0, 3, 6, -5, 15, 90],      //first col
        [1, 4, 7, 5, 15, 90],       //sec col
        [2, 5, 8, 15, 15, 90],      //third col
        [0, 4, 8, 5, 15, 45],       //first diagonal
        [2, 4, 6, 5, 15, 135],      //second diagonal
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won🎉"  //display who has won the game
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";     //pop-up the gif
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`  //pop-up the line
            document.querySelector(".line").style.width = "20vw";   
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {     //if the box is empty
            boxtext.innerText = turn;       //fill the box with respective move
            turn = changeTurn();            //now change the turn X to O or O to X
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for ->" + turn;    //if the game is not over then display the respective turn for the player
            }
        }
    })
})

//reset function
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""      //set all the previous text to ""
    });
    turn = "X";
    isgameover = false
    document.querySelector(".line").style.width = "0vw";    //no line
    document.getElementsByClassName("info")[0].innerText = "Turn for ->" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"    //gif off
})


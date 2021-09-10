/*
* 0 - rock
* 1 - paper
* 2 - scissors
*/
function randomNumber() {
    return Math.floor(Math.random() * 3);
}

function play(playersValue) {
    var player = playersValue * 1;
    var enemy = randomNumber() * 1;
    // alert(player + " vs " + enemy)
    if (player == enemy){
        alert("tie!");
        document.stats.ties.value++;
    }
    else {
        if (player == 0 && enemy == 2
            || player == 1 && enemy == 0
            || player == 2 && enemy == 1){
            alert("win!");
            document.stats.wins.value++;
        }
        else{
            alert("lose!");
            document.stats.loses.value++;
        }
    }
}
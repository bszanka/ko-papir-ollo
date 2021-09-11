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
    if (player == enemy) {
        document.getElementById("result").textContent = getEnemy(enemy) + "Döntetlen! 🤝";
        document.stats.ties.value++;
    }
    else {
        if (player == 0 && enemy == 2
            || player == 1 && enemy == 0
            || player == 2 && enemy == 1) {
            document.getElementById("result").textContent = getEnemy(enemy) + "Nyertél! 💪";
            document.stats.wins.value++;
        }
        else {
            document.getElementById("result").textContent = getEnemy(enemy) + "Vesztettél! 👎";
            document.stats.loses.value++;
        }
    }
}

function getEnemy(x) {
    if (x == 0)
        return "Kő! ";
    else if (x == 1)
        return "Papír! ";
    else if (x == 2)
        return "Olló! ";
    else
        return "Ajaj. ";
}
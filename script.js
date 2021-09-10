function koszon() {
    var x = document.urlap1.nev.value;
    alert("Szia " + x + " !");
}

function osszeg() {
    var x = parseInt(document.urlap1.szam1.value);
    var y = parseInt(document.urlap1.szam2.value);
    var sum = x + y;
    alert("Osszeg = " + sum)
}

function szamit() {
    var ossz = document.urlap1.osszeg.value * 1;
    var k = document.urlap1.kamat.value * 1;
    var ho = document.urlap1.honap.value * 1;
    var eredmeny = ossz * Math.pow(1 + k / 100, ho / 12);
    alert("A térfogat: " + eredmeny);
}

function emel() {
    var fizetes = document.urlap1.fizetes.value * 1;
    if (fizetes <= 100000) {
        fizetes *= 1.25;
    }
    alert(fizetes);
}

function csillag() {
    var db = document.urlap1.db.value * 1;
    var res = "";
    for (let index = 0; index < db; index++) {
        res = res.concat("*");
    }
    alert(res);
}

function kek() {
    document.body.style.backgroundColor = "cyan";
}

function osszead() {
    var a = document.urlap1.a.value * 1;
    var b = document.urlap1.b.value * 1;
    var sum = a + b;
    document.urlap1.ossz.value = sum;
}

function ugras() {
    location.href = "https://www.google.com";
}

var ablak;
function ujablak() {
    ablak = open("uj.html");
}

function piros() {
    ablak.document.bgColor = "red";
}

function szin() {
    document.bgColor = "white";
}

function idozit() {
    document.bgColor = "teal";
    setTimeout("szin()", 5000);
}

function rendez() {
    nev = new Array([4]);
    nev[0] = document.urlap.szoveg0.value;
    nev[1] = document.urlap.szoveg1.value;
    nev[2] = document.urlap.szoveg2.value;
    nev[3] = document.urlap.szoveg3.value;
    nev.sort();
    document.urlap.szoveg0.value = nev[0];
    document.urlap.szoveg1.value = nev[1];
    document.urlap.szoveg2.value = nev[2];
    document.urlap.szoveg3.value = nev[3];
}

function rendez() {
    nev = new Array([4]);
    nev[0] = document.urlap.szoveg0.value;
    nev[1] = document.urlap.szoveg1.value;
    nev[2] = document.urlap.szoveg2.value;
    nev[3] = document.urlap.szoveg3.value;
    nev.sort();
    document.urlap.szoveg0.value = nev[0];
    document.urlap.szoveg1.value = nev[1];
    document.urlap.szoveg2.value = nev[2];
    document.urlap.szoveg3.value = nev[3];
}

var idoStr, datumStr;
function ido() {
    most = new Date();
    ora = most.getHours();
    perc = most.getMinutes();
    mp = most.getSeconds();
    ev = most.getYear();
    honap = most.getMonth() + 1;
    nap = most.getDate();
    idoStr = ora;
    idoStr += ((perc < 10) ? ":0" : ":") + perc;
    idoStr += ((mp < 10) ? ":0" : ":") + mp;
    datumStr = 1900 + ev;
    datumStr += ((honap < 10) ? "-0" : "-") + honap;
    datumStr += ((nap < 10) ? "-0" : "-") + nap;
    document.digiora.ido.value = idoStr;
    document.digiora.datum.value = datumStr;
    setTimeout("ido()", 1000);
}

function kuld() {
    document.urlap.action = "mailto:" + document.urlap.email.value;
}

/*
* 0 - stone
* 1 - paper
* 2 - scissors
*/
function randomNumber() {
    return Math.floor(Math.random() * 3);
}

function play(element,player) {
    var enemy = randomNumber()*1;
    alert(element.value*1 + " vs " + enemy)
    if(element.value*1 == enemy*1)
        alert("tie!");
    else if(element.value*1 < enemy*1)
        alert("win!" + element.value*1 + " vs " + enemy*1);
    else if(element.value*1 > enemy*1)
        alert("lose!");
}
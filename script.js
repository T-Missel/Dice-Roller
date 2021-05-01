var resultText = document.getElementById("resulttext");

document.getElementById("d4").onclick = function() {showResult(4)};
document.getElementById("d6").onclick = function() {showResult(6)};
document.getElementById("d8").onclick = function() {showResult(8)};
document.getElementById("d10").onclick = function() {showResult(10)};
document.getElementById("d12").onclick = function() {showResult(12)};
document.getElementById("d20").onclick = function() {showResult(20)};
document.getElementById("d100").onclick = function() {showResult(100)};

function showResult(sides) {
  //chooose number from 1 to number of sides
  let diceResult = Math.floor(Math.random() * sides) + 1;
  let dr = diceResult.toString();
  resultText.innerHTML = dr;
}

var cost = 0.0;
var invest = 0.0;
var added = 0.0;
var rate = 0.0;
var unit = "";

function getData() {
  document.getElementById("result-1").innerHTML = " ";
  document.getElementById("result-2").innerHTML = " ";
  document.getElementById("result-3").innerHTML = " ";
  var result = 0.0;
  var total = 0.0;
  var base = 0.0;
  var i = 1;

  cost = parseFloat(document.getElementById("cost").value);
  invest = parseFloat(document.getElementById("ih").value);
  added = parseFloat(document.getElementById("added").value);
  rate = parseFloat(document.getElementById("rate").value);
  unit = document.getElementById("unit").value;
  base = cost;
  if (unit !== "year") {
    invest /= 12;
  }
  do {
    base += added * 12;
    costWithAdded = cost + (added * 12)
    total = costWithAdded + (costWithAdded * (rate / 100));
    document.getElementById("result-1").innerHTML += "Year " + i + " : " + commas(total.toFixed(2)) + " Baht.<br>";
    document.getElementById("result-2").innerHTML += "Year " + i + " : " + commas(base.toFixed(2)) + " Baht.<br>";
    cost = total;
    i++;
  } while (i <= invest);

  document.getElementById("result-3").innerHTML += "Profit is " + commas((total - base).toFixed(2)) + " Bath. <br>";
}

function commas(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
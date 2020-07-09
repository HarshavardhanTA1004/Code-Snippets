// The JavaScript Math object allows you to perform mathematical tasks on numbers.
// Math.round(x) returns the value of x rounded to its nearest integer:
function convert(degree) {
  var x;
  if (degree == "C") {
    x = document.getElementById("c").value * 9 / 5 + 32;
    document.getElementById("f").value = Math.round(x);
  } else {
    x = (document.getElementById("f").value -32) * 5 / 9;
    document.getElementById("c").value = Math.round(x);
  }
}



function identifier() {
  var side1 = parseFloat(document.getElementById('side1').value);
  var side2 = parseFloat(document.getElementById('side2').value);
  var side3 = parseFloat(document.getElementById('side3').value);

  var arrSide = [side1, side2, side3];

  if (side1 > 0 && side2 > 0 && side3 > 0) {
    if (side1 === side2 && side1 === side3 && side2 === side3) {
      alert("Your values make an equilateral triangle. All sides equal;");
    } else if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1)) {
      alert("OOPS!, You can not form any triangle. Sum of any two sides should be greater than the remaining side.")
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
      alert("Your values give an isosceless triangle. Two sides equal;");
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      alert("Your values give an scalene triangle. all sides not equal;");
    }
  } else {
    alert("Ensure all spaces are filled and// NOTE:  All Values must be greater than zero;");
  }
}

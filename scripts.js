var side1=parseFloat(document.getElementsByClassName('side1'))
var side2=parseFloat(document.getElementsByClassName('side2'))
var side3=parseFloat(document.getElementsByClassName('side3'))

function identifier() {
  if(side1 === side2 && side1 === side3 && side2 === side3){
    alert("Your values make an equilateral triangle. All sides equal;");
  }
else if(side1 === side2 || side1 === side3 || side2 === side3){
  alert("Your values give an isosceless triangle. Two sides equal;")
}
esle if ((side1+side2<=side3) || (side1+side3<=side2) || (side2_side3<=side1)){
  alert("Your can not form any triangle. Sum of two sides should be greater than the remaining side.")
}
else (value1!==value2 && value1!==value3 && value2!== value3){
  alert("Your values give an scalene triangle. all sides not equal;")
}
}

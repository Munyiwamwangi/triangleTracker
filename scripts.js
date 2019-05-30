var side1=parseFloat(document.getElementsByClassName('side1'))
var side2=parseFloat(document.getElementsByClassName('side2'))
var side3=parseFloat(document.getElementsByClassName('side3'))

function identifier() {
  if(side1 === side2 && side1 === side3 && side2 === side3){
    console.log("Your values make an equilateral triangle. All sides equal;");
  }

}
}

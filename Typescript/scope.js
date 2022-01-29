// function fnScope() {
//   var x = 20;
//   if (x == 20) {
//     var y = "NIT";
//     console.log(x);
//   }
//   console.log(y);
// }
// fnScope();

function fnScope() {
  let x = 20;
  if (x == 20) {
    let y = "NIT";
    console.log(x);
    if (y == "NIT") {
      console.log(y);
    }
  }
  //   console.log(y);
}
fnScope();

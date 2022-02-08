class A1 {
   private price:number = 8000

   print() {
       console.log(this.price)
   }
}

class B1 extends A1 {
    // price = 6000
}

   var a11 = new A1()
//    a11.price = 7000
class Mobile {
  name:string = "Apple"
  static price:number = 90000
   constructor(){
       this.name = "Samsung" 
       Mobile.price = Mobile.price + 20000
   }
  print():void {
    console.log(this.name,Mobile.price)
  }
   static changePrice(){
      Mobile.price = 20000
   }

}

 var m1 = new Mobile() 
 Mobile.price = 80000 
 m1.name = "onePlus"
 m1.print()


 var m2 = new Mobile()
 m2.print()


class Brand {

   static brandName:string = "Apple"  // Static Property
   model:string = "Iphone 13" //Instance Property

   printData():void {
       console.log(Brand.brandName,this.model)
   }

}

   var b1 = new Brand()
     b1.printData()
     b1.model = "Iphone 7"
     Brand.brandName = "one plus"
     
     b1.printData()


   var b2 = new Brand()
   b2.printData()
   b2.model = "Iphone 11"
   b2.printData()


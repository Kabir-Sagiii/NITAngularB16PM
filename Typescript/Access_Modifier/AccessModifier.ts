class BrandMobile {
     brandName:string
     private price:number; 
     protected modelName:string;

     constructor() {
         this.brandName = "Apple"
         this.price = 90000 
         this.modelName = "Iphone 12"
     }

       displayDetails(){
           console.log(this.brandName,this.price,this.modelName)
       }

}

 var brand1 = new BrandMobile()
 brand1.displayDetails()
 brand1.brandName = "onePlus"

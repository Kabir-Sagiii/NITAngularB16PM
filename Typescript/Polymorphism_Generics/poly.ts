class MobileBrand {

       model:string = "Iphone 13"
       price:number = 90000 

        display(name:string,price:number){
              console.log(this.model,this.price)
        }
   

}

class AppleBrand extends MobileBrand {
      display() {
            this.model = "Iphone 12"
            console.log(this.model)
      }

}

   var A1=    new AppleBrand()
   A1.display()
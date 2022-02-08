abstract class ProductTemplate {
    name:string =""
    price:number = 0 
    Quantity:number = 0 

    Total():number {
        return this.price * this.Quantity
    }

     abstract Print():void

     


}

 class Mobile extends ProductTemplate {
       name = "IPhone 13"
       price = 90000 
       Quantity = 3

        Print() {
            //   console.log(this.name,this.price,this.Quantity) 
            console.log(`Mobile name is :${this.name}`)
        }
       
 }

  class Tv extends ProductTemplate {
        name = "Samsung Tv 54 Inch"
        Print() {
            console.log(`Tv name is :${this.name}`)
        }
  }
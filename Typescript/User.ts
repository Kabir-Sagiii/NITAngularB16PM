class User  {

  name:string;
  email:string
  constructor() {
      this.name = "Raj"
      this.email = "Raj@gmail.com"
  }
    printDetails():void {
        console.log(this.name,this.email)
    }
    changeData():void{
        this.name = "Rahul"
    }

}

class Address extends User {
   city:string;
   state:string


   constructor(){
     super()

       this.city ="Hyd"
       this.state="TS"

   }


   displayData() {
       console.log(this.city,this.state)
   }
   

}

   var address1 = new Address()
   address1.printDetails()
   address1.displayData()
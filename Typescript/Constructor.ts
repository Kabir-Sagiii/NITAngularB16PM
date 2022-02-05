class Employee {
    id:number  ;
    name:string;
    city:string;

     constructor() {
         this.id = 101
         this.name="Rahul"
         this.city = "Indore"
     }
       getDetails():void {
           console.log(this.id,this.name,this.city)
       }


}
        var Emp1= new Employee()
        Emp1.name= "Sneha"
         Emp1.getDetails()
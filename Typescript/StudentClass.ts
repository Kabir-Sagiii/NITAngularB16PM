class StudentC {
  name:string = "Raj"
  phone:number = 999999999

    getDetails():void {
          console.log(this.name)
          console.log(this.phone)
    }


}

  var s1 = new StudentC()
  s1.getDetails()


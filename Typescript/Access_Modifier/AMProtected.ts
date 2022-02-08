class AMProtected {
     protected Quantity:number = 8

    protected print(){
         console.log(this.Quantity)
     }
}

class B2 extends AMProtected {
    Quantity = 98
    display() {
     var a1    = new AMProtected()
     this.Quantity = 78
    }
}


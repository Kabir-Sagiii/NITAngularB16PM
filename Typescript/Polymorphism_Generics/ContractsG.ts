  interface studentDetails {
      name:string;
      email:string
  }


class CG {
    display<studentDetails>(x:studentDetails,y:studentDetails) {
          console.log(x,y)
    }
}

   var cg1=  new CG()
   cg1.display<number>(98,98)
   cg1.display<string>("cdsjb","sjkbdj")
   cg1.display<studentDetails>({
       name:"",
       email:""
   },{
       name:"",
       email:""
   })
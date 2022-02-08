class StudentInfo {
    

     display<T>(name:T,city:T):void {
          
    console.log(name,city)
     }
}

 var s1 =    new StudentInfo()
 s1.display("dsf","sad")
 s1.display(12,78)
 s1.display(true,false)
 
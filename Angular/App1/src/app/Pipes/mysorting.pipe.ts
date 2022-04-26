import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysorting'
})
export class MysortingPipe implements PipeTransform {
    
  transform(listOfProduct:any,ascending:boolean) {
      if(ascending){

      
        listOfProduct.sort()
        return listOfProduct
      } else {
        listOfProduct.sort() 
        listOfProduct.reverse()
        return listOfProduct
      }
     }
  

}

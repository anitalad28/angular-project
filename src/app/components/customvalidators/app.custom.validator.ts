import { AbstractControl } from "@angular/forms";
//import { User } from "../../Models/app.user.model";

export class NumericNonNegativeValidator {
  // 1. static method
  // 2. i/p parameter must be used carefully
  // 3. return type is "any"
  static checkVal(ctrl: AbstractControl): any {
    if (parseInt(ctrl.value) > 0) {
      return null; // valid
    } else {
      return { invalid: true }; // invalid
    }
  }

  static checkSpace(ctrl: AbstractControl): any {
    var my_string = ctrl.value;
    let spaceCount = (my_string.split(" ").length - 1);
   
    if ( spaceCount < 3 ) {
      return null; // valid
    } else {
      return { invalid: true }; // invalid
    }    
  }

//   static checkCategory(ctrl: AbstractControl): any {
//     if ( ctrl.value == 0 ) {
//       return { invalid: true }; // invalid
//     } else {
//       return null; // valid
//     }  
   
//   }

//   static checkUniqueId(ctrl: AbstractControl): any {
//     console.log(User);
//     for(let p of Products) {
//       if ( p.ProductId == ctrl.value ){
//           return { invalid:true };
//       } 
//     }
//     return null;      
//   }  

}
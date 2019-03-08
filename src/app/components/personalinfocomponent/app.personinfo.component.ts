// import { Component, OnInit } from "@angular/core";
// import { Person } from '../../Models/app.person.model';
// import { FormGroup, FormControl, Validators } from "@angular/forms";
// //import { Product, Categories } from "./app.product.model";
// //import { ProductLogic } from "./app.product.logic";
// import { NumericNonNegativeValidator } from "./../customvalidators/app.custom.validator";

// @Component({
//   selector: "app-personinfo-component",
//   templateUrl: "app.personinfo.view.html"
// })
// export class PersonInfoComponent implements OnInit {
//   // the OnInit is Component Lifecycle interface
//   // this provide ngOnInit() method.
//   person: Person;
//   //private logic: ProductLogic;
//  // products: Array<Product>;
//   //isSaved: boolean;
//   // categories locally
//   //categories = Categories;
//   tableHeaders: Array<string>;
//   //isChecked: boolean;
//   //Checked = false;

//   // define FormGroup
//   frmProduct: FormGroup;
//   constructor() {
//     this.person = new Person(0, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", 0);
//     //this.logic = new ProductLogic();
//     //this.products = new Array<Product>();
//     this.tableHeaders = new Array<string>();
//    // this.isSaved = false;
//     //this.isChecked = false;

//     // define an instance of FormGroup and map property of mode class
//     // i.e. Product class with FormControl
//     this.frmProduct = new FormGroup({
//       ProductId: new FormControl(
//         this.person.PersonUniqueId,
//         Validators.compose([
//           Validators.required,
//           Validators.pattern("[0-9]+"),
//           Validators.minLength(2),
//           Validators.maxLength(5),
//           Validators.compose([NumericNonNegativeValidator.checkUniqueId])
//         ])
//       ),
//       ProductName: new FormControl(
//         this.product.ProductName,
//         Validators.compose([
//           Validators.required,
//           Validators.pattern("[A-Z][A-Z-a-z ]{0,19}"),
//           Validators.compose([NumericNonNegativeValidator.checkSpace])
//         ])
//       ),
//       CategoryName: new FormControl(
//         this.product.CategoryName,
//         Validators.compose([
//           Validators.required,
//           Validators.compose([NumericNonNegativeValidator.checkCategory])
//         ])
//       ),

//       Price: new FormControl(
//         this.product.Price,
//         Validators.compose([NumericNonNegativeValidator.checkVal])
//       )
//     });
//   }
//   // the method will be invoked immediately after ctor.
//   ngOnInit(): void {
//     // read all properties of Product class and push them in
//     // tableHeaders array
//     for (let p in this.product) {
//       this.tableHeaders.push(p);
//     }
//     this.products = this.logic.getProducts();
//   }
//   clear(): void {
//     this.product = new Product(0, "", "", 0,true);
//   }
//   save(): void {
//     // read form values using "formControlName" under fromGroup
//     this.product = this.frmProduct.value;
//     this.products = this.logic.saveProduct(this.product);
//     this.isSaved = false;
//   }
//   loadForm(): void {
//     this.product = new Product(0, "", "", 0,true);
//     this.isSaved = true;
//   }
//   getselectedrow(p: Product): void {
//     // 1. Create a deep copy of the selected product
//     // 2. assign that copy to this.product
//     this.product = Object.assign({}, p);
//   }

//   checkAll(e:any):void{
//     this.products.map(function (p) {
//       p.Checked = e.target.checked;
//     });
//   }

//   CheckUncheckHeader(ProductID:number):void {
//     this.isChecked = true;
//     for(let p of this.products) {
//       if (p.ProductId == ProductID ) {
//         p.Checked = true;
//        }
//     }

//     console.log(this.products);

//     for(let p of this.products) {
//       console.log('Anita ' + p.ProductId + p.Checked);
//        if ( !p.Checked ) {
//          this.isChecked = false;
//        }
//     }
// };


// }

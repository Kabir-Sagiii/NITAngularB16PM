import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  formRegister = new FormGroup({
   Name : new FormControl("Kabir"),
   Password : new FormControl(""),
   Email:new FormControl("Kabir@gmail.com")

  })
  constructor() { }
  getFormData() {
      console.log(this.formRegister.value.Name)
      console.log(this.formRegister.controls['Name'])

  }
   ResetForm() {
     this.formRegister.reset({
       Name:"Kabir",
       Password:"rtyuio",
       Email:"Kabir@gmail.com"
     })
   }
   SetForm() {
     this.formRegister.setValue({
       Name:"NIT@",
       Password:"  ",
       Email:"NIT!@@gmail.com"
     })
   }
    PatchForm() {
      this.formRegister.patchValue({
        Name:"Sneha",
        Email:"Sneha@gmail.com"
      })
    }

  ngOnInit(): void {
  }

}

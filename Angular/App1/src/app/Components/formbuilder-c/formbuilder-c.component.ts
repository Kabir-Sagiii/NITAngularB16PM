import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder,Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-formbuilder-c',
  templateUrl: './formbuilder-c.component.html',
  styleUrls: ['./formbuilder-c.component.css']
})
export class FormbuilderCComponent implements OnInit {
 submitted:boolean = false
  constructor(private fb:FormBuilder) { }

     formRegister = this.fb.group({
     uname:["",[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
     phone:["",[Validators.required,Validators.pattern(/\+91[0-9]{10}/)]],
     email:["",[Validators.required,Validators.email]],
     newControl:this.fb.array([this.fb.control(""),])

     })
            get NewControl() {
              return this.formRegister.controls['newControl'] as FormArray
            }
                addNewControl() {
                   this.NewControl.push(this.fb.control(""))
                }
                   removeControl(i:any) {
                      this.NewControl.removeAt(i)
                   }
  ngOnInit(): void {
  }

  register() {
    this.submitted = true
    // alert("working")
     if(!this.formRegister.valid) {
         return
     }
      alert("Registration is Successfully")
  }

}

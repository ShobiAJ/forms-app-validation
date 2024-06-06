import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  username:string = '';
  password:string = "";
  genders = ['Male' , 'Female', 'Others']

  ngOnInit(): void {
  }

  onSubmit(formvalue: NgForm) {
    console.log(formvalue)
  }

  setFormData(value:NgForm) {
    value.form.patchValue({
      uname : "Shobi",
      // password : 1998
    })

  }

}

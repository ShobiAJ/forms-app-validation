import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private _fb:FormBuilder) { }

  reactiveForm !: FormGroup

  options = ['Developer', 'Tester', 'Team Lead']

  username:string = '';
  password: string = '';

  ngOnInit(): void {
    this.reactiveForm = this._fb.group( {
      'username' : ['', Validators.required],
      'password' : ['', [Validators.required, Validators.minLength(4)]],
      'role' : ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.reactiveForm.value)
    if(this.reactiveForm.invalid) {
      this.reactiveForm.markAllAsTouched();
    }
    else {
      alert('Form Submitted')
      this.reactiveForm.reset()
    }
  }

}

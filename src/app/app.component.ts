import { Component } from '@angular/core';
//import { FormGroup, FormControl } from '@angular/forms';
import{FormBuilder , Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){}

  /* registrationForm = new FormGroup({
    userName: new FormControl('Shraddha'),
    password : new FormControl(''),
    confirmPassword: new FormControl(''),
    address : new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('') */
      registrationForm = this.fb.group({
        userName: ['',[Validators.required, Validators.minLength(3)]],
        password:[''],
        confirmPassword:[''],
        address: this.fb.group({
          city:[''],
          state:[''],
          postalCode:['']
        })

      
  });
  loadApiData(){
    this.registrationForm.patchValue({
      userName:'jim',
      password:'test',
      confirmPassword:'test',
      
    });
  }
  onSubmit(){
    console.log(this.registrationForm.value)
  }
}

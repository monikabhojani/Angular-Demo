import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/username.validators';
import { confirmpassword } from 'src/app/shared/confirmpassword.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logingroup:FormGroup;

  constructor(private _formbuilder:FormBuilder) { 

  }

  ngOnInit() {

   

    this.logingroup= this._formbuilder.group(
      {
      username:['', [forbiddenNameValidator, Validators.required]],
      email:[''],
      password:['', [Validators.required]],
      confirmpassword:['', Validators.required],
      agree:[false]
      },
      {validators:confirmpassword}
    );
    this.logingroup.get('agree').valueChanges.subscribe( val => {

      const emailvalidate = this.logingroup.get('email');

      if(val){
        emailvalidate.setValidators([Validators.required]);
      }
      else{
        emailvalidate.clearValidators();
      }
      emailvalidate.updateValueAndValidity();
    }
    );
   
  }
}

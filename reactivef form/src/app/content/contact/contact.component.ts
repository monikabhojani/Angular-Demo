import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactformgroup:FormGroup;

  constructor(private _formbuilder:FormBuilder) { }

  ngOnInit() {

    this.contactformgroup = this._formbuilder.group(
      {
        username:['', Validators.required],
        email:['', [Validators.required, Validators.pattern]],
        number:['', [Validators.required, Validators.pattern]],
        message:[''],
      }
    );

  }

  onSubmit(){
    console.log(this.contactformgroup.value);
  }

  get username(){
    return this.contactformgroup.get('username');
  }
  get email(){
    return this.contactformgroup.get('email');
  }
  get number(){
    return this.contactformgroup.get('number');
  }


}

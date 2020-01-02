import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray  } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationform:FormGroup;
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    

      this.registrationform = this.formbuilder.group(
        {
          phonelistarray: this.formbuilder.array([
            this.formbuilder.control('')
          ])
        }
      );
   }
 
  get phone(){
    return this.registrationform.get('phonelistarray') as FormArray;    
  }

  addControl(){ 
    this.phone.push(
      this.formbuilder.control('')
    )  
  }

  deleteControl(index){    
    this.phone.removeAt(index);
  }
 
}

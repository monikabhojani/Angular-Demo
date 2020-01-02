import { AbstractControl } from '@angular/forms';

export function confirmpassword(control:AbstractControl): {[key:string]:boolean} | null{

    const password = control.get('password');
    const confirm = control.get('confirmpassword');

    if(password.pristine || confirm.pristine)
    {
        return null;
    }

    return password.value != confirm.value? {'mismatch': true} : null;

}
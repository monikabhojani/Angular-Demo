import { AbstractControl } from '@angular/forms';

export function forbiddenNameValidator(control:AbstractControl): {[key:string]:any}{
    
    const forbidden = /admin/.test(control.value.toLowerCase());
    
    return forbidden? {'forbidden':{value:control.value}} : null;
}
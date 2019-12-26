import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule, MatButton } from '@angular/material/button';
import {MatToolbarModule, MatToolbarRow, MatToolbar} from '@angular/material/toolbar'; 


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    CdkTableModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports:[
    MatButton,
    MatToolbarRow,
    MatToolbar
  ]
})
export class MaterialModule { }

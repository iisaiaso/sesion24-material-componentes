import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.material.module';
import { DialogmodalComponent } from './dialogmodal/dialogmodal.component';


@NgModule({
  declarations: [
    DialogComponent,
    DialogmodalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    DialogComponent,
    DialogmodalComponent
  ]
})
export class ComponentsModule { }

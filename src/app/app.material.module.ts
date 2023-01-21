import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
    imports:
        [
            MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatCardModule
        ],
    exports:
        [
            MatDialogModule,
            MatFormFieldModule,
            MatInputModule,
            MatButtonModule,
            MatCardModule
        ]
})
export class MaterialModule { }
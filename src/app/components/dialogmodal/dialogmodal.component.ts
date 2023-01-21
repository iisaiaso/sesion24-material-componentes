import { DialogData } from './../dialog/dialog.component';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogmodal',
  templateUrl: './dialogmodal.component.html',
  styleUrls: ['./dialogmodal.component.css']
})
export class DialogmodalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DialogmodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

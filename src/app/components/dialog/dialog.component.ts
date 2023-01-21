import { DialogmodalComponent } from './../dialogmodal/dialogmodal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';


export interface DialogData {
  name: string
  deporte: string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(private dialog: MatDialog) { }
  ngOnInit(): void {
  }
  name!: string
  deporte!: string

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogmodalComponent, {
      data: {name: this.name, juego: this.deporte},
    })
    dialogRef.afterClosed().subscribe(result =>{
      console.log('The dialog was closed')
      this.deporte = result
    })
  }
}
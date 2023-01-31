import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-venta',
  templateUrl: './dialog-venta.component.html',
  styleUrls: ['./dialog-venta.component.css']
})
export class DialogVentaComponent {
  constructor(public dialogRef: MatDialogRef<DialogVentaComponent>) {}
}

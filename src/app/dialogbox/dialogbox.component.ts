import { Component,OnInit} from '@angular/core';


import {MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})

export class DialogboxComponent implements OnInit {
 
  constructor(private dialog:MatDialogRef<DialogboxComponent>
) { 
  dialog.disableClose = true;
}

  ngOnInit(): void {
  }
  accept(){
    this.dialog.close({event:'true'});
  }
  decline(){
    this.dialog.close({event:'false'});
  }

}

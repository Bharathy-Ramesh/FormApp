import { Component } from '@angular/core';
import { ApiserviceCallService } from 'src/app/apiservice-call.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FillFormComponent } from './fill-form/fill-form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public apiservice : ApiserviceCallService, public dialog : MatDialog){}
  datas : any;
  displayedColumns : any = ['S.No', 'Name', 'Email', 'MobileNumber', 'Country', 'State', 'City']; 
  ngOnInit() {
    this.getDetails()
   }
   openForm(){
   var dialogRef = this.dialog.open( FillFormComponent );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getDetails();
    });
  }
  getDetails(){
    this.apiservice.currentDetails.subscribe((res) => 
      {
        var data = []
        console.log(res);
        if(res.length > 0 || Object.keys(res).length > 0){
          data.push(res);
          this.datas = data;
        }

      });
    console.log(this.datas);
  }

  
}

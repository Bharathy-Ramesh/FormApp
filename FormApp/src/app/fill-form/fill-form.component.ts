import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GoogleMap } from '@angular/google-maps';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ApiserviceCallService } from 'src/app/apiservice-call.service';



@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.scss']
})
export class FillFormComponent implements OnInit {

  constructor(public dialog : MatDialog, public http : HttpClient, public apiservice : ApiserviceCallService) { }
  cityName : any;
  apiToken : any;
  countryName : any;
  stateName : any;
  address : any;
  formDetails = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    phoneNumber : new FormControl('', Validators.required),
    emailAddress : new FormControl('', [Validators.required, Validators.email]),
    address : new FormControl('', Validators.required),
    city : new FormControl('', Validators.required),
    state : new FormControl('', Validators.required),
    country : new FormControl('', Validators.required)
  })
  ngOnInit(): void {
    this.http.get("https://www.universal-tutorial.com/api/getaccesstoken",{
      headers : {
        "Accept": "application/json",
        "api-token": "YACMCz3sCKr1nSr2SLeSaL2XXXwN2G0wdTambm1f6ZnnFd9-oVOzq_OrZYlB0WfPxUk",
        "user-email": "rbharathy2999@gmail.com"
      }
    }).subscribe(res => {
      this.apiToken = res
    });
  }
  getCountry(){
    this.http.get("https://www.universal-tutorial.com/api/countries",{
      headers : {
      "Authorization": "Bearer "+this.apiToken.auth_token,
      "Accept": "application/json"}
    }).subscribe(res => {
      this.countryName = res
    });
  }

  getState(){
    this.http.get(`https://www.universal-tutorial.com/api/states/${this.formDetails.value.country}`,{
      headers : {
      "Authorization": "Bearer "+this.apiToken.auth_token,
      "Accept": "application/json"}
    }).subscribe(res => {
      this.stateName = res
    });
  }

  getCity(){
    this.http.get(`https://www.universal-tutorial.com/api/cities/${this.formDetails.value.state}`,{
      headers : {
      "Authorization": "Bearer "+this.apiToken.auth_token,
      "Accept": "application/json"}
    }).subscribe(res => {
      this.cityName = res
    });
  }

  onSubmit(){
    this.apiservice.changeMessage(this.formDetails.value);
    console.log(this.formDetails);
  }
  viewGoogleMap(){
    var dialogRef = this.dialog.open( GoogleMap );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.address = "15th cross street, Anthonypuram, Suramangalam";
    });
  }

}

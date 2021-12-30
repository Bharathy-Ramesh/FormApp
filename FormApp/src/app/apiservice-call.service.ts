import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceCallService {

  constructor() { }
  public editDataDetails: any = [];
  public subject = new Subject<any>(); 
  private inputSource = new  BehaviorSubject(this.editDataDetails);
  currentDetails = this.inputSource.asObservable();
  changeMessage(details: string) {
    debugger;
    this.inputSource.next(details)
    }
}

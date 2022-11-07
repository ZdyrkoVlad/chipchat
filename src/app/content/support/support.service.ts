import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { supportList } from '../../mock-obj/support-mock';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor() { }

  createSupportChat(): void {

  }

  getSupportList(): Observable<any> {
    return new BehaviorSubject(supportList);
  }

  getSupportByID(id: string): Observable<any> {
    return new BehaviorSubject(supportList.filter(support => support.id === id).pop());
  }

}

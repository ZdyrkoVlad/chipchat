import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor() { }

  createSupportChat(): void {

  }

  getSupportList(): Observable<any> {
    return of({ some: 'sad' });
  }

  getSupportDetail(): void {
  }

}

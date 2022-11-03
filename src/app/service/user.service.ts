import { Injectable } from '@angular/core';
import { role } from '../dao/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private roleStorage: role | undefined;

  get role(): role {
    return localStorage.getItem('role') as role;
  }

  set role(userRole: role) {
    localStorage.setItem('role', userRole);
  }

  constructor() { }

  clearRole(): void {
    localStorage.removeItem('role');
  }
}

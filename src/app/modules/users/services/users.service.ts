import { Injectable } from '@angular/core';
import { USERS } from '@core-config/users.config';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getAllUsers(){
    return of(USERS);
  }
}
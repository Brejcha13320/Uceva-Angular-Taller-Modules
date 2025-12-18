import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { USERS } from '../../../core/config/users.config';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  getAllUsers(){
    return of(USERS);
  }
}
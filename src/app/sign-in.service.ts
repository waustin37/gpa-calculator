import { Injectable } from '@angular/core';

/**
 * Title: sign-in.service.ts
 * Author: William Austin
 * Date: 23 September 2023
 * Description: Sign In Service for GPA Calculator
 */
@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012];
   }

   validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
   }
}

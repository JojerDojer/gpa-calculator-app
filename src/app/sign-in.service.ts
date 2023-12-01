/**
 * Title: sign-in-service.ts
 * Author: John Davidson
 * Date: 30 November 2023
 * Description: Sign in service
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  // Declares a property for student Ids of type Array<number>.
  studentIds: Array<number>;

  constructor() {
    // Constructor initializes the studentIds array with specific student IDs.
    this.studentIds = [ 1007, 1008, 1009, 1010, 1011, 1012];
  }

  // A method designed to take a studentId parameter to test if it matches
  // any id in the studentIds array.
  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }

}

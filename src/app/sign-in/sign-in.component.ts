/**
 * Title: sign-in.component.ts
 * Author: John Davidson
 * Date: 30 November 2023
 * Description: Sign in component
*/

// Import necessary services and modules.
import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  // Define Properties.
  signinForm: FormGroup;
  errorMessage: string;

  // Inject required services using constructor.
  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) { }

  ngOnInit(): void {
    // Create a form group for the signinForm.
    this.signinForm = this.fb.group({
      // Initialize the 'studentId' form control with an empty string, and two validators.
      // Validators: Required (cannot be empty) and Pattern (only allowing numeric values).
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  // A getter function to easily access the controls of the signinForm.
  get form() { return this.signinForm.controls; }

  // Handle the form submission.
  onSubmit(){
    // Extract the form values.
    const formValues = this.signinForm.value;
    // Convert the studentId to an integer.
    const studentId = parseInt(formValues.studentId);

    // Check if the entered studentId is valid using signinService.
    if (this.signinService.validate(studentId)) {
      // Set a session cookie with the user's studentId.
      this.cookieService.set('session_user', studentId.toString(), 1);
      // Navigate to the homepage.
      this.router.navigate(['/']);
    } else {
      // Display an error message if the studentId is invalid.
      this.errorMessage = 'The student ID you entered is invalid, please try again.';
    }
  }
}

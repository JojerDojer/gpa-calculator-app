/**
 * Title: home.component.ts
 * Author: John Davidson
 * Date: 25 November 2023
 * Description: Home component
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // Array of selectable grades.
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  // Array to store all transcript entries.
  transcriptEntries: Array<ITranscript> = [];
  // Total GPA
  gpaTotal: number = 0;
  // Initializes TranscriptForm as a FormGroup for managing form controls.
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  // Initialize transcriptForm with two form controls - 'course' and 'grade'.
  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      // Using validators, enforce both 'course' and 'grade' to require a non-empty value.
      course: ['', Validators.required ],
      grade: ['', Validators.required]
    })
  }

   // A getter function to easily access the controls of the transcriptForm.
  get form() { return this.transcriptForm.controls; }

  // Method to handle form submission.
  onSubmit(event) {
    // Push a new transcript entry object to the transcript Entries.
    // The entry is constructed from the values of the 'course' and 'grade' form controls.
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });

    // Reset the form to clear input fields after submission.
    event.currentTarget.reset();
  }

  // Method to calculate GPA based on entered grades.
  calculateResults() {
    let gpa: number = 0;

    // Iterate through each transcript entry.
    for (let entry of this.transcriptEntries) {
      // For each transcript entry grade, assign the corresponding GPA value.
      switch(entry.grade) {
        case 'A':
          console.log('its an a')
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.70;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C':
          gpa += 2.00;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += .70;
          break;
        case 'F':
          gpa += 0.00;
          break;
      }
    }

    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length; // Calculate average GPA.
    console.log(this.gpaTotal);
  }

  // Method to clear all transcript entries.
  clearEntries() {
    this.transcriptEntries = [];
    this.gpaTotal = 0; // Reset GPA total.
  }

}

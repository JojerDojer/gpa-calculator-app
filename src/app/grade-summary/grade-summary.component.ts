/**
 * Title: grade-summary.component.ts
 * Author: John Davidson
 * Date: 25 November 2023
 * Description: Grade-summary component
 */

// Import the input property.
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  // Input properties to receive data from parent component.
  @Input() grade: string; // Grade for the course.
  @Input() course: string; // Course name.

  constructor() { }

  ngOnInit(): void {
  }

}

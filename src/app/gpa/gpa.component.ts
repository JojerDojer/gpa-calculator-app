/**
 * Title: gpa.component.ts
 * Author: John Davidson
 * Date: 25 November 2023
 * Description: Gpa component
 */

// Import the input property.
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  // Input property to receive GPA total from the parent component.
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}

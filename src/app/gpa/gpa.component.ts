/**
 * Title: gpa.component.ts
 * Author: William Austin
 * Date: 16 September 2023
 * Description: GPA Component for GPA Calculator
 */

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent {
  @Input() gpaTotal: number;
}

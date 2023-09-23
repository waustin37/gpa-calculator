/**
 * Title: grade-summary.component.ts
 * Author: William Austin
 * Date: 16 September 2023
 * Description: Grade Summary Component for GPA Calculator
 */

import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent {

@Input() grade: string;
@Input() course: string;

}

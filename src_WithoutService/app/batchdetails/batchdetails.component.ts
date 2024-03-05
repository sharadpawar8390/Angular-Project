import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent 
{
    public batches = [
      {"Name" : "Pre Placement Activity","Duration" : "3 Months","Fees" : 19500},
      {"Name" : "Logic Building","Duration" : "3.5 Months","Fees" : 20500},
      {"Name" : "Python Machine Learning","Duration" : "4 Months","Fees" : 21000},
      {"Name" : "Angular with Mean","Duration" : "4.5 Months","Fees" : 21500},
    ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent 
{
  public Name : string = "marvellous infosystem pune";
  public Value : number = 78.647;
  public today = new Date();

  public Book = // json
  {
    "Name" : "Learning Angular",
    "Author" : "James Peter"
  }
}

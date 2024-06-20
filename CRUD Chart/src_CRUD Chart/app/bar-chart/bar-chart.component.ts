import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges 
{
  @Input() products: Product[] = [];
  chartData: any[] = [];

  ngOnChanges(changes: SimpleChanges): void 
  {
    if (changes['products']) 
      {
         this.updateChartData();
      }
  }

  updateChartData(): void 
  {
    this.chartData = this.products.map(product => 
      (
        {
          name: product.Name,
          value: product.Price
        }
      ));
  }
}

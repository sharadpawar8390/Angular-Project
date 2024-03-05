import { Component, OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrl: './batches.component.css'
})
export class BatchesComponent implements OnInit
{
    public Batches : any;

    constructor(private MService : MarvellousService)
    {}

    ngOnInit() 
    {
      this.MService.getBatches().subscribe(data =>
      {
        this.Batches = data;
      })   
    }

    deleteData()
    {
      this.MService.deleteBatches().subscribe(data =>
        {
          this.Batches = data;
        })
    }

    insertData()
    {
      this.MService.insertBatches().subscribe(data =>
        {
          this.Batches = data;
        })
    }

    updateData()
    {
      this.MService.updateBatches().subscribe(data =>
        {
          this.Batches = data;
        })
    }
}

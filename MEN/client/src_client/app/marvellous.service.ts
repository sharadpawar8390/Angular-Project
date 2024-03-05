import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService
{
  constructor(private http : HttpClient) {}

  getBatches()
  {
    return this.http.get("http://localhost:9889/getBatches");
  }

  deleteBatches()
  {
    return this.http.get("http://localhost:9889/deleteBatches");
  }

  insertBatches()
  {
    return this.http.get("http://localhost:9889/insertBatches");
  }

  updateBatches()
  {
    return this.http.get("http://localhost:9889/updateBatches");
  }
}

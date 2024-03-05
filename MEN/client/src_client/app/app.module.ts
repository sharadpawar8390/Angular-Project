import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MarvellousService } from './marvellous.service';
import { HttpClientModule } from '@angular/common/http';
import { BatchesComponent } from './batches/batches.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    MarvellousService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

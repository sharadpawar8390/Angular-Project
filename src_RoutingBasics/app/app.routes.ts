import { Routes } from '@angular/router';

import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';

export const routes: Routes = [
    
    // Specific Route
    {path : 'Batchdetails',component : BatchDetailsComponent},
    {path : 'Batchlist', component : BatchListComponent},
    // Default Route
    {path : '',component : HomePageComponent},
    // Wildcard Route / Invalid Route
    {path : '**', component : InvalidPageComponent},
    
];

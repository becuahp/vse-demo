import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationSearchComponent } from './components/information-search/information-search.component';
import { InformationDetailsComponent } from './components/information-details/information-details.component';

const routes: Routes = [
  {path: 'search', component: InformationSearchComponent},
  {path: 'information', component: InformationDetailsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main';
import { NotFoundComponent } from './not-found';
import { NewsFormComponent } from './news-form';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'edit/:NewsID', component: NewsFormComponent },
  { path: 'edit', component: NewsFormComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

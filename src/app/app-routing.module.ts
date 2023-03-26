import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangedetectionComponent } from './changedetection/changedetection.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'path' },
  {path:'', component:ChangedetectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

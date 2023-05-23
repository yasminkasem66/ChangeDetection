import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { NgTemplateNgForComponent } from './ngTemplate/ng-template-ng-for/ng-template-ng-for.component';
import { NgTemplateNgIfComponent } from './ngTemplate/ng-template-ng-if/ng-template-ng-if.component';
import { NgTemplateNgSwitchComponent } from './ngTemplate/ng-template-ng-switch/ng-template-ng-switch.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FileScreenShotComponent } from './file-screen-shot/file-screen-shot.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'path' },
  {path:'', component:ChangedetectionComponent},
  {path:'validation', component:TemplateDrivenFormComponent},
  {path:'screenShot', component:FileScreenShotComponent},
  {path:'ngFor', component:NgTemplateNgForComponent},
  {path:'ngIf', component:NgTemplateNgIfComponent},
  {path:'ngSwitch', component:NgTemplateNgSwitchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

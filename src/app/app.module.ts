import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportantChildComponent } from './important-child/important-child.component';
import { UnimportantChildComponent } from './unimportant-child/unimportant-child.component';
import { ChangedetectionComponent } from './changedetection/changedetection.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportantChildComponent,
    UnimportantChildComponent,
    ChangedetectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

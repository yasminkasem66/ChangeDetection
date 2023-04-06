import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportantChildComponent } from './important-child/important-child.component';
import { UnimportantChildComponent } from './unimportant-child/unimportant-child.component';
import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    ImportantChildComponent,
    UnimportantChildComponent,
    ChangedetectionComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

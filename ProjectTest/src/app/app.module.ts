import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { ProblemServices } from '../app/shared/services/ProblemServices';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [
    ProblemServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

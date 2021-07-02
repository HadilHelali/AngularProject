// ************************************* //
// ************ Modules **************** //
// ************************************* //
import { NgModule } from '@angular/core';
// the NgModule is imported from the core
import { BrowserModule } from '@angular/platform-browser';
// importing the fontawesome module
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
// import the http module here (for the http client )
import {HttpClientModule} from '@angular/common/http'

// **************************************** //
// ************ Components **************** //
// **************************************** //

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './Components/header/header.component';
import { ButtonComponent } from './Components/button/button.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { TaskItemComponent } from './Components/task-item/task-item.component';
// When creating a new component , it has to be imported here

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent
    // Then it is added here
    // if we generate a component with cli , the modification are done
    // automatically
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import it here as well : font awesome
    FontAwesomeModule,
    // include the http client module here :
    HttpClientModule
  ],
  providers: [], // Any global services
  bootstrap: [AppComponent]
})
export class AppModule { }

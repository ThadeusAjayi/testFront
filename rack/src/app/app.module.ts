import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import { Routing } from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule, 
    Routing,
    FormsModule,
    JsonpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

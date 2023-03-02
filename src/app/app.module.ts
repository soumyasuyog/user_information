import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { UserinformationComponent } from './userinformation/userinformation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderComponent,
    UserinformationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

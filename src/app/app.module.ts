import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { MatCheckboxModule, MatSelectModule, MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer';
import { HeaderComponent } from './header';
import { MainComponent } from './main';
import { NotFoundComponent } from './not-found';
import { NewsFormComponent } from './news-form';
import { DatePipe } from './pipes';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent,
    NewsFormComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
  exports: [DatePipe]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const footerComponent = createCustomElement(FooterComponent, {injector: this.injector});
    customElements.define('app-footer', footerComponent);
  }
}

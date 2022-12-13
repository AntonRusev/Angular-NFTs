import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appInterceptorProvider } from './app.interceptor';
import { CoreModule } from './core/core.module';
import { API_ERROR } from './shared/constants';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    SharedModule
  ],
  providers: [appInterceptorProvider,
  {
    provide: API_ERROR,
    useValue: new BehaviorSubject(null)
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

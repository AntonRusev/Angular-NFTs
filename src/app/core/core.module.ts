import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorComponent
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { SharedModule } from '../shared/shared.module';
import { NftsRoutingModule } from './nfts-routing.module';
import { NftDetailComponent } from './nft-detail/nft-detail.component';
import { AddNewNftsComponent } from './add-new/add-new.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatalogComponent,
    NftDetailComponent,
    AddNewNftsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NftsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class NftsModule { }

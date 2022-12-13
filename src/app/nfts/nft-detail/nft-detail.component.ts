import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INfts } from 'src/app/shared/interfaces';
import { NftsService } from '../nfts.service';

@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.scss']
})
export class NftDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(this.activatedRoute.snapshot.data?.['nftId'], 'THIS')
    console.log(this.activatedRoute.snapshot.params['id'], 'THIIIIIIIS')
   }

  ngOnInit(): void {
  }

}

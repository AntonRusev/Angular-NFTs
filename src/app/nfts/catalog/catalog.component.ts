import { Component, OnInit } from '@angular/core';
import { INfts } from 'src/app/shared/interfaces';
import { NftsService } from '../nfts.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  nftsList: INfts[] | null = null;

  errorFetchingData = false;

  constructor(private nftsService: NftsService) { }

  ngOnInit(): void {
    this.nftsService.getNfts().subscribe({
      next: (value) => {
        this.nftsList = value;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { NftsService } from 'src/app/nfts/nfts.service';
import { INfts } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  nftsList: INfts[] | null = null;

  errorFetchingData = false;

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get user() {
    return this.authService.user;
  }

  constructor(private nftsService: NftsService, private authService: AuthService) { }

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

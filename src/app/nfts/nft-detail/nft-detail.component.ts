import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { INfts } from 'src/app/shared/interfaces';
import { NftsService } from '../nfts.service';

@Component({
  selector: 'app-nft-detail',
  templateUrl: './nft-detail.component.html',
  styleUrls: ['./nft-detail.component.scss']
})
export class NftDetailComponent implements OnInit {

  nftDetail: INfts | null = null;

  editMode: boolean = false;

  isOwner: boolean = false;

  get user() {
    return this.authService.user;
  }

  errorFetchingData = false;

  id: string = '';

  constructor(private activatedRoute: ActivatedRoute, private nftsService: NftsService,
     private router: Router, private fb: FormBuilder, private authService: AuthService) {
    // console.log(this.activatedRoute.snapshot.params['id'], 'THIIIIIIIS')
    this.id = this.activatedRoute.snapshot.params['id'];
   }

   checkOwnership() {
    if (this.nftDetail?._ownerId === this.user?._id) {
      this.isOwner = true;
    }
    return this.isOwner;
   }

   ngOnInit(): void {
    this.nftsService.getNft(this.id).subscribe({
      next: (value) => {
        this.nftDetail = value;
        console.log(this.nftDetail, 'THIS THE DETAIL');
        this.checkOwnership();
        console.log(this.isOwner, 'THIS THE OWNER');
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      }
    });
  }

  deleteThisNft(){
    if(confirm("Are you sure to delete this Nft?")) {
      this.nftsService.deleteNft(this.id)
      .subscribe(user => {
        this.router.navigate(['/nfts/catalog']);
      });
    }
  }
 // TODO use this alternatively - https://stackoverflow.com/questions/41684114/easy-way-to-make-a-confirmation-dialog-in-angular

 editForm = this.fb.group({
  imageUrl: ['', [Validators.required]], //TODO imageURL validator
  nftName: ['', [Validators.required, Validators.minLength(5)]],
  price: [1, [Validators.required, Validators.min(1)]],
  description: ['', [Validators.required, Validators.minLength(10)]],
});

 editModeHandler() {
  this.editMode = !this.editMode;

  if(this.editMode) {
    this.editForm.patchValue({
      nftName: this.nftDetail?.nftName,
      imageUrl: this.nftDetail?.imageUrl,
      price: this.nftDetail?.price,
      description: this.nftDetail?.description
    })
  }
 }

 editNftHandler() {
  if( this.editForm.invalid) {
    return;
  }

  const { nftName, imageUrl, price, description} = this.editForm.value;

  this.nftsService.updateNft(this.id, nftName!, imageUrl!, price!, description!)
    .subscribe(user => {
      this.router.navigate([`/nfts/catalog`]);
    });
 }
}

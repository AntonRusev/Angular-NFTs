import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NftsService } from '../nfts.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewNftsComponent {

  form = this.fb.group({
    nftName: ['', [Validators.required, Validators.minLength(5)]],
    imageUrl: ['', [Validators.required, Validators.pattern(`(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))`)]], //TODO imageURL validator
    price: [1, [Validators.required, Validators.min(1)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor(private fb: FormBuilder, private nftsService: NftsService, private router: Router) { }

  newNftHandler() {
    if( this.form.invalid) {
      return;
    }

    const { nftName, imageUrl, price, description} = this.form.value;
    // TODO
    this.nftsService.createNft(nftName!, imageUrl!, price!, description!)
      .subscribe(user => {
        this.router.navigate(['/nfts/catalog']);
      });
  }

}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewNftsComponent {

  form = this.fb.group({
    nftName: ['', [Validators.required, Validators.minLength(5)]],
    imageUrl: ['', [Validators.required]], //TODO imageURL validator
    price: ['', [Validators.required, Validators.min(1)]],
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  newNftHandler() {
    if( this.form.invalid) {
      return;
    }
    console.log(this.form.value)
    const { nftName, imageUrl, price} = this.form.value;
    // TODO
    // this.authService.createNft(nftName!, imageUrl!, price!)
    //   .subscribe(user => {
    //     this.router.navigate(['/nfts/catalog']);
    //   });
  }

}

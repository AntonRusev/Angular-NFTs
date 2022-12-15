import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { INfts } from "src/app/shared/interfaces";
import { NftsService } from "../nfts.service";

@Injectable({
    providedIn: 'root'
})
export class NftResolver implements Resolve<INfts | null> {
    constructor(private nftService: NftsService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): INfts | null | Observable<INfts> | Promise<INfts> {
        const nftId = route.params['id'];
        // console.log(nftId + 'NFT ID HERE')
        if (!nftId) {
            this.router.navigate(['/catalog']);
            return null;
        }
        return this.nftService.getNft(nftId)
    }
}
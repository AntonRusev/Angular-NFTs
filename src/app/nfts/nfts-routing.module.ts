import { RouterModule, Routes } from "@angular/router";
import { OnlyLoggedInUsersGuard } from "../shared/guards/auth.activate";
import { AddNewNftsComponent } from "./add-new/add-new.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { NftDetailComponent } from "./nft-detail/nft-detail.component";
import { NftResolver } from "./resolvers/nft.resolver";

const routes: Routes = [
    {
        path: 'catalog',
        component: CatalogComponent,
        data: {
            title: 'Catalog'
        }
    },
    {
        path: 'details/:id',
        resolve: { NftResolver },
        component: NftDetailComponent,
        data: {
            title: 'Details'
        }
    },
    {
        path: 'new',
        component: AddNewNftsComponent,
        canActivate: [OnlyLoggedInUsersGuard],
        data: {
            title: 'Add new NFTs'
        }
    },
]

export const NftsRoutingModule = RouterModule.forChild(routes);
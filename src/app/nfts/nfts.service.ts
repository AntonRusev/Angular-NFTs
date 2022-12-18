import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INfts } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NftsService {

  // TODO make a variable with the rest-api adress 

  constructor(private http: HttpClient) { }

  
  getNfts() {
    let url = 'http://localhost:3030/data/catalog';
    return this.http.get<INfts[]>(url);
  }

  getNft(id: string) {
    return this.http.get<INfts>('http://localhost:3030/data/catalog/' + id);
  }
 
  createNft(nftName: string, imageUrl: string, price: number, description: string){
    return this.http.post<INfts>('http://localhost:3030/data/catalog', { nftName, imageUrl, price, description });
  }

  updateNft(id: string, nftName: string, imageUrl: string, price: number, description: string){
    return this.http.put<INfts>('http://localhost:3030/data/catalog/' + id, {  nftName, imageUrl, price, description });
  }

  deleteNft(id: string) {
    return this.http.delete<INfts>('http://localhost:3030/data/catalog/' + id);
  }
}

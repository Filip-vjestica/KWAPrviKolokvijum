import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Namestaj} from '../Model/Namestaj';

@Injectable({
  providedIn: 'root'
})

export class NamestajService {

  private server = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  
  }

  public dajSveNamestaje(): Observable<Namestaj[]> {
    return this.http.get(this.server + '/namestaj').pipe(map((res: Namestaj[]) => res));
  }

  public obrisiNamestaj(namestaj: Namestaj) {
    return this.http.delete(this.server + '/namestaj/' + namestaj.id).pipe(map((res: Namestaj) => res));
  }

  public snimiNamestaj(namestaj: Namestaj) {
    return this.http.post(this.server + '/namestaj', namestaj).pipe(map((res: Namestaj) => res));

  }

  pronadjiPoIdu(id: string) {
    return this.http.get(this.server + '/namestaj/' + id).pipe(map((res: Namestaj) => res));
  }

  izmeni(k: Namestaj) {
    return this.http.put(this.server + '/namestaj/' + k.id, k).pipe(map((res: Namestaj) => res));
  }
  

  
}

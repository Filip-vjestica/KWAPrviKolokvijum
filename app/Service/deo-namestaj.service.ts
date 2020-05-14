import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {DeoNamestaj} from '../Model/DeoNamestaj';

@Injectable({
  providedIn: 'root'
})

export class DeoNamestajService {

  private server = 'http://localhost:3000';


  constructor(private http: HttpClient) { 

  }

  public dajDeoNamestaj(): Observable<DeoNamestaj[]> {
    return this.http.get(this.server + '/deoNamestaja').pipe(map((res: DeoNamestaj[]) => res));
  }

  public obrisiDeoNamestaj(deoNamestaj: DeoNamestaj) {
    return this.http.delete(this.server + '/deoNamestaja/' + deoNamestaj.id).pipe(map((res: DeoNamestaj) => res));
  }

  public snimiDeoNamestaj(deoNamestaj: DeoNamestaj) {
    return this.http.post(this.server + '/deoNamestaja', deoNamestaj ).pipe(map((res: DeoNamestaj) => res));

  }

  pronadjiPoIdu(id: string) {
    return this.http.get(this.server + '/deoNamestaja/' + id).pipe(map((res: DeoNamestaj) => res));
  }

  izmeni(k: DeoNamestaj) {
    return this.http.put(this.server + '/deoNamestaja/' + k.id, k).pipe(map((res: DeoNamestaj) => res));
  }
}

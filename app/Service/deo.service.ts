import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Deo} from '../Model/Deo';

@Injectable({
  providedIn: 'root'
})

export class DeoService {

  private server = 'http://localhost:3000';

  constructor(private http: HttpClient) {

  }

  public dajSveDelove(): Observable<Deo[]> {
    return this.http.get(this.server + '/deo').pipe(map((res: Deo[]) => res));
  }

  public obrisiDeo(deo: Deo) {
    return this.http.delete(this.server + '/deo/' + deo.id).pipe(map((res: Deo) => res));
  }

  public snimiDeo(deo: Deo) {
    return this.http.post(this.server + '/deo', deo).pipe(map((res: Deo) => res));

  }

  pronadjiPoIdu(id: string) {
    return this.http.get(this.server + '/deo/' + id).pipe(map((res: Deo) => res));
  }

  izmeni(k: Deo) {
    return this.http.put(this.server + '/deo/' + k.id, k).pipe(map((res: Deo) => res));
  }
}

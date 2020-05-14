import { Component, OnInit } from '@angular/core';
import {Deo} from '../../Model/Deo';
import {DeoService} from '../../Service/deo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Namestaj} from '../../Model/Namestaj';
import {NamestajService} from '../../Service/namestaj.service';
import {DeoNamestaj} from '../../Model/DeoNamestaj';
import {DeoNamestajService} from '../../Service/deo-namestaj.service';

@Component({
  selector: 'app-deo-namestaja-tabela',
  templateUrl: './deo-namestaja-tabela.component.html',
  styleUrls: ['./deo-namestaja-tabela.component.css']
})
export class DeoNamestajaTabelaComponent implements OnInit {

  sviDeloviNamestaja: DeoNamestaj[] = [];
  myForm: FormGroup;
  odabranNamestaj: Namestaj;
  odabranDeo: Deo;
  sviNamestaji: Namestaj[] = [];
  sviDelovi: Deo[] = [];


  constructor(private formBuilder: FormBuilder, private router: Router, private deoNamestajaService: DeoNamestajService,
              private namestajService: NamestajService, private deoService: DeoService) {
  }

  ngOnInit(): void {
    this.dajSveDeloveNamestaja();
    this.dajSveNamestaje();
    this.dajSveDelove();
    this.myForm = this.formBuilder.group({
      komada: [null, [Validators.required]]
    });
  }


  dajSveNamestaje() {
    this.namestajService.dajSveNamestaje().pipe(map(res => {
      this.sviNamestaji = res;
    })).subscribe(() => {
      console.log(this.sviNamestaji);
      if (this.sviNamestaji.length > 0) {
        this.odabranNamestaj = this.sviNamestaji[0];
      }
    }, e => {
      alert('greska prilikom dobavljanja namestaja sa servera');
    });
  }

  dajSveDelove() {
    this.deoService.dajSveDelove().pipe(map(res => {
      this.sviDelovi = res;
    })).subscribe(() => {
      console.log(this.sviDelovi);
      if (this.sviDelovi.length > 0) {
        this.odabranDeo = this.sviDelovi[0];
      }
    }, e => {
      alert('greska prilikom dobavljanja delova sa servera');
    });
  }

  dajSveDeloveNamestaja() {
    this.deoNamestajaService.dajDeoNamestaj().pipe(map(res => {
      this.sviDeloviNamestaja = res;
    })).subscribe(() => {
      console.log(this.sviDeloviNamestaja);

    }, e => {
      alert('greska prilikom dobavljanja delova namestaja sa servera!');
    });
  }

  detalji(id: number) {
    this.router.navigate(['deoNamestajaDetalji/' + id]);

  }

  obrisi(i: number) {
    console.log('Indeks ' + i);
    const zaBrisanje = this.sviDeloviNamestaja[i];
    this.deoNamestajaService.obrisiDeoNamestaj(zaBrisanje).subscribe(
      response => {
        this.dajSveDeloveNamestaja();
        console.log('Response ' + response);
      },
      error => {
        console.log('Error ' + error);
      }
    );
  }


  izmeni(id: number) {
    this.router.navigate(['deoNamestajaIzmena/' + id]);
  }

  onChangeNamestaj(event) {
    const id = event.target.value.split(' ')[0];
    this.odabranNamestaj = this.pronadjiNamestajPoIdu(id);
  }

  onChangeDeo(event) {
    const id = event.target.value.split(' ')[0];
    this.odabranDeo = this.pronadjiDeoPoIdu(id);
  }

  private pronadjiNamestajPoIdu(id: string) {
    return this.sviNamestaji.filter(e => e.id === +id)[0];
  }

  private pronadjiDeoPoIdu(id: string) {
    return this.sviDelovi.filter(e => e.id === +id)[0];
  }

  snimiDeoNamestaja() {
    const data = this.myForm.getRawValue();
    console.log(this.odabranNamestaj);
    console.log(this.odabranDeo);
    const o: DeoNamestaj =
      {
        id: null,
        namestajId: this.odabranNamestaj.id,
        deoId: this.odabranDeo.id,
        komada: data.komentar 
      };
    this.deoNamestajaService.snimiDeoNamestaj(o).subscribe(res => {
      this.dajSveDeloveNamestaja();
    }, error => {

    });
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';
import {Namestaj} from '../../Model/Namestaj';
import {Deo} from '../../Model/Deo';
import {DeoNamestaj} from '../../Model/DeoNamestaj';
import {NamestajService} from '../../Service/namestaj.service';
import {DeoService} from '../../Service/deo.service';
import {DeoNamestajService} from '../../Service/deo-namestaj.service';

@Component({
  selector: 'app-deo-namestaja-izmena',
  templateUrl: './deo-namestaja-izmena.component.html',
  styleUrls: ['./deo-namestaja-izmena.component.css']
})
export class DeoNamestajaIzmenaComponent implements OnInit {

  odabranNamestaj: Namestaj;
  odabranDeo: Deo;
  sviNamestaji: Namestaj[] = [];
  sviDelovi: Deo[] = [];
  myForm: FormGroup;
  deoNamestaja = {
    komada: undefined,
  };
  id: string;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private deoNamestajService: DeoNamestajService,
              private namestajService: NamestajService, private deoService: DeoService) {
  }


  ngOnInit(): void {
    this.dajSveNamestaje();
    this.dajSveDelove();
    this.myForm = this.formBuilder.group({
      komada: [null, [Validators.required]],
    });

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');
      this.id = id;
      console.log(id);
      this.deoNamestajService.pronadjiPoIdu(id).subscribe(res => {
        console.log(res);
        this.myForm.controls['komada'].setValue(res.komada);
        this.deoNamestaja.komada = res.komada;

      }, err => alert('Greska sa serverom'));
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
      alert('greska prilikom dobavljanja namestaja sa servera!');
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
      alert('greska prilikom dobavljanja delova sa servera!');
    });
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

  izmeniDeoNamestaja() {
    const data = this.myForm.getRawValue();
    console.log(this.odabranNamestaj);
    console.log(this.odabranDeo);
    const o: DeoNamestaj =
      {
        id: +this.id,
        namestajId: this.odabranNamestaj.id,
        deoId: this.odabranDeo.id,
        komada: data.komada
      };
    console.log('Menjam Deo Namestaja!');
    console.log(o);

    this.deoNamestajService.izmeni(o).subscribe(res => {
    }, error => {

    });
  }

}

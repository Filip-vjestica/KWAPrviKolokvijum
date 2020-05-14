import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router'; 
import { map } from 'rxjs/operators';
import {Namestaj} from '../../Model/Namestaj';
import {NamestajService} from '../../Service/namestaj.service';

@Component({
  selector: 'app-namestaj-tabela',
  templateUrl: './namestaj-tabela.component.html',
  styleUrls: ['./namestaj-tabela.component.css']
})
export class NamestajTabelaComponent implements OnInit {

  sviNamestaji: Namestaj[] = [];
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private namestajService: NamestajService) { }

  dajSveNamestaje() {
    this.namestajService.dajSveNamestaje().pipe(map(res => {
      this.sviNamestaji = res;
    })).subscribe(() => {
      console.log(this.sviNamestaji);
    }, e => {
      alert('greska prilikom dobavljanja namestaja sa servera!');
    });
  }

  ngOnInit(): void {

    this.dajSveNamestaje();
    this.myForm = this.formBuilder.group({
      naziv: [null, [Validators.required]],
      opis: [null, [Validators.required]],
      cena: [null, [Validators.required]]
    });
  }

  

  detalji(id: number) {
    this.router.navigate(['namestajDetalji/' + id]);

  }

  obrisi(i: number) {
    console.log('Indeks ' + i);
    const zaBrisanje = this.sviNamestaji[i];
    this.namestajService.obrisiNamestaj(zaBrisanje).subscribe(
      response => {
        this.dajSveNamestaje();
        console.log('Response ' + response);
      },
      error => {
        console.log('Error ' + error);
      }
    );
  }

  snimiNamestaj() {
    if (this.myForm.valid) {
      const vrednost = this.myForm.getRawValue();
      this.namestajService.snimiNamestaj(vrednost).subscribe(
        response => {
          this.dajSveNamestaje();
          console.log('Response ' + response);
        },
        error => console.log('Error ' + error)
      );
    }
  }

  izmeni(id: number) {
    this.router.navigate(['namestajIzmena/' + id]);
  }

}

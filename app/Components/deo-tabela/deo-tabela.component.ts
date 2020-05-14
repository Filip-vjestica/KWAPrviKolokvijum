import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Router} from '@angular/router'; 
import { map } from 'rxjs/operators';
import {Deo} from '../../Model/Deo';
import {DeoService} from '../../Service/deo.service';

@Component({
  selector: 'app-deo-tabela',
  templateUrl: './deo-tabela.component.html',
  styleUrls: ['./deo-tabela.component.css']
})
export class DeoTabelaComponent implements OnInit {

  sviDelovi: Deo[] = [];
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private deoService: DeoService) { }

  dajSveDelove() {
    this.deoService.dajSveDelove().pipe(map(res => {
      this.sviDelovi = res;
    })).subscribe(() => {
      console.log(this.sviDelovi);
    }, e => {
      alert('greska prilikom dobavljanja delova sa servera!');
    });
  }

  ngOnInit(): void {

    this.dajSveDelove();
    this.myForm = this.formBuilder.group({
      naziv: [null, [Validators.required]],
      dimenzije: [null, [Validators.required]]
    });
  }

  

  detalji(id: number) {
    this.router.navigate(['deoDetalji/' + id]);

  }

  obrisi(i: number) {
    console.log('Indeks ' + i);
    const zaBrisanje = this.sviDelovi[i];
    this.deoService.obrisiDeo(zaBrisanje).subscribe(
      response => {
        this.dajSveDelove();
        console.log('Response ' + response);
      },
      error => {
        console.log('Error ' + error);
      }
    );
  }

  snimiDeo() {
    if (this.myForm.valid) {
      const vrednost = this.myForm.getRawValue();
      this.deoService.snimiDeo(vrednost).subscribe(
        response => {
          this.dajSveDelove();
          console.log('Response ' + response);
        },
        error => console.log('Error ' + error)
      );
    }
  }

  izmeni(id: number) {
    this.router.navigate(['deoIzmena/' + id]);
  }

}

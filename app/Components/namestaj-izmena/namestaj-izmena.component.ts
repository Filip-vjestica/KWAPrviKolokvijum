import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Namestaj} from '../../Model/Namestaj';
import {NamestajService} from '../../Service/namestaj.service';

@Component({
  selector: 'app-namestaj-izmena',
  templateUrl: './namestaj-izmena.component.html',
  styleUrls: ['./namestaj-izmena.component.css']
})
export class NamestajIzmenaComponent implements OnInit {

  form: any;
  namestaj = {
    naziv: undefined,
    opis: undefined,
    cena: undefined

  };
  id: string;

  constructor(private formBuilder: FormBuilder, private namestajService: NamestajService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form =
      this.formBuilder.group({
        naziv: [null, [Validators.required]],
        opis: [null, [Validators.required]],
        cena: [null, [Validators.required]]
      });

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');
      this.id = id;
      console.log(id);
      this.namestajService.pronadjiPoIdu(id).subscribe(res => {
        console.log(res);
        this.form.controls['naziv'].setValue(res.naziv);
        this.form.controls['opis'].setValue(res.opis);
        this.form.controls['cena'].setValue(res.cena);
        this.namestaj.naziv = res.naziv;
        this.namestaj.opis = res.opis;
        this.namestaj.cena = res.cena;
      }, err => alert('Greska sa serverom'));
    });
  }

  izmeniKorisnika() {
    const k: Namestaj =
      {
        id: +this.id,
        naziv: this.namestaj.naziv,
        opis: this.namestaj.opis,
        cena: this.namestaj.cena
      };

    this.namestajService.izmeni(k).subscribe(r => {
      console.log(k);
    }, e => {
      alert('Greska!');
    });

  }
}

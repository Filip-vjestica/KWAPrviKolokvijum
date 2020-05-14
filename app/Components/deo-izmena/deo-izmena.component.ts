import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Deo} from '../../Model/Deo';
import {DeoService} from '../../Service/deo.service';

@Component({
  selector: 'app-deo-izmena',
  templateUrl: './deo-izmena.component.html',
  styleUrls: ['./deo-izmena.component.css']
})
export class DeoIzmenaComponent implements OnInit {

  form: any;
  deo = {
    naziv: undefined,
    dimenzije: undefined
  };
  id: string;

  constructor(private formBuilder: FormBuilder, private deoService: DeoService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.form =
      this.formBuilder.group({
        naziv: [null, [Validators.required]],
        dimenzije: [null, [Validators.required]]
      });

    this.route.paramMap.subscribe(params => {

      const id = params.get('id');
      this.id = id;
      console.log(id);
      this.deoService.pronadjiPoIdu(id).subscribe(res => {
        console.log(res);
        this.form.controls['naziv'].setValue(res.naziv);
        this.form.controls['dimenzije'].setValue(res.dimenzije);
        this.deo.naziv = res.naziv;
        this.deo.dimenzije = res.dimenzije;
      }, err => alert('Greska sa serverom'));
    });
  }

  izmeniKorisnika() {
    const k: Deo =
      {
        id: +this.id,
        naziv: this.deo.naziv,
        dimenzije: this.deo.dimenzije
      };

    this.deoService.izmeni(k).subscribe(r => {
      console.log(k);
    }, e => {
      alert('Greska!');
    });

  }

}

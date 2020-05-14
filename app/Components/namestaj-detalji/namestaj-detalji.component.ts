import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {NamestajService} from '../../Service/namestaj.service';

@Component({
  selector: 'app-namestaj-detalji',
  templateUrl: './namestaj-detalji.component.html',
  styleUrls: ['./namestaj-detalji.component.css']
})
export class NamestajDetaljiComponent implements OnInit {

  form: any;

  constructor(private formBuilder: FormBuilder, private namestajService: NamestajService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form =

      this.formBuilder.group({
        naziv: [null],
        opis: [null],
        cena: [null]
      });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.namestajService.pronadjiPoIdu(id).subscribe(res => {
        console.log(res);
        this.form.controls['naziv'].setValue(res.naziv);
        this.form.controls['opis'].setValue(res.opis);
        this.form.controls['cena'].setValue(res.cena);
      }, err => alert('Greska sa serverom'));
    });
  }

}

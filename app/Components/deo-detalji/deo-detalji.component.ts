import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {DeoService} from '../../Service/deo.service';

@Component({
  selector: 'app-deo-detalji',
  templateUrl: './deo-detalji.component.html',
  styleUrls: ['./deo-detalji.component.css']
})
export class DeoDetaljiComponent implements OnInit {

  form: any;

  constructor(private formBuilder: FormBuilder, private deoService: DeoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form =

      this.formBuilder.group({
        naziv: [null],
        dimenzije: [null]
      });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.deoService.pronadjiPoIdu(id).subscribe(res => {
        console.log(res);
        this.form.controls['naziv'].setValue(res.naziv);
        this.form.controls['dimenzije'].setValue(res.dimenzije);
      }, err => alert('Greska sa serverom'));
    });
  }

}

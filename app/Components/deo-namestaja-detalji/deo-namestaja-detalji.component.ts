import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {DeoNamestajService} from '../../Service/deo-namestaj.service';

@Component({
  selector: 'app-deo-namestaja-detalji',
  templateUrl: './deo-namestaja-detalji.component.html',
  styleUrls: ['./deo-namestaja-detalji.component.css']
})
export class DeoNamestajaDetaljiComponent implements OnInit {

  form: any;

  constructor(private formBuilder: FormBuilder, private deoNamestajService: DeoNamestajService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form =

      this.formBuilder.group({
        namestajId: [null],
        deoId: [null],
        komada: [null],
      });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(id);
      this.deoNamestajService.pronadjiPoIdu(id).subscribe(res => {
        console.log(res);
        this.form.controls['namestajId'].setValue(res.namestajId);
        this.form.controls['deoId'].setValue(res.deoId);
        this.form.controls['komada'].setValue(res.komada);
      }, err => alert('Greska sa serverom'));
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { RedesService } from '../../../services/redes.service';
import { NgForm } from '@angular/forms';
import { Red } from '../../../models/red';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-red-add',
  templateUrl: './red-add.component.html',
  styleUrls: ['./red-add.component.css']
})
export class RedAddComponent implements OnInit {

  constructor(private redesService: RedesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.redesService.getRedes();
  }

  onSubmit(form : NgForm){
    if(form.value.$key == null)
      this.redesService.insertRed(form.value);
    else
      this.redesService.updateRed(form.value);
    
    this.resetForm(form);
    this.toastr.success('Operación realizada con éxito', 'Red Registered');
  }

  resetForm(form : NgForm){
    if(form != null)
      form.reset();
    this.redesService.selectedRed = new Red();
  }

}

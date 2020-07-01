import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from '../../../models/funcionario';
import { FuncService } from '../../../services/func.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Sede } from '../../../models/sede';

@Component({
  selector: 'app-funcionario-add',
  templateUrl: './funcionario-add.component.html',
  styleUrls: ['./funcionario-add.component.css']
})
export class FuncionarioAddComponent implements OnInit {

  public sedes: Array<Sede> = [];

  constructor(public funcService : FuncService, private toastr : ToastrService, private router: Router) { }

  ngOnInit() {    
    this.getSedes();
  }

  getSedes(){
    this.funcService.getSedes().subscribe((data:Array<Sede>) =>
      this.sedes = data
    );
  }

  onSubmit(autorForm: NgForm){
    console.log(autorForm.value);
    if(autorForm.value.id == null){
      this.funcService.insertFunc(autorForm.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(["directorio/funcionarios/funcionarios-list"]);
      });
    }else{
      console.log('No null');      
      this.funcService.updateFunc(autorForm.value.id,autorForm.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(["directorio/funcionarios/funcionarios-list"]);
      });
    }
    this.resetForm(autorForm);
    this.toastr.success('Operación realizada con éxito', 'Autor registrado');
  }

  resetForm(form : NgForm){
    if(form != null)
      form.reset();
    this.funcService.selectedFunc = new Funcionario();
  }

}

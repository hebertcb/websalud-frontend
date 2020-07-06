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

  public sedes: Array<String> = ["Sede Tacna","Sede Lima","Sede Puno"];

  constructor(public funcService : FuncService, private toastr : ToastrService, private router: Router) { }

  ngOnInit() {
    //this.getSedes();
  }

  getSedes(){
    /*
    this.funcService.getSedes().subscribe((data:Array<Sede>) =>
      this.sedes = data
    );
    */
  }

  onSubmit(funcionarioForm: NgForm){
    console.log(funcionarioForm.value);
    if(funcionarioForm.value.id == null){
      this.funcService.insertFunc(funcionarioForm.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(["directorio/funcionarios/funcionarios-list"]);
      });
    }else{    
      this.funcService.updateFunc(funcionarioForm.value.id,funcionarioForm.value).subscribe((response) => {
        console.log(response);
        this.router.navigate(["directorio/funcionarios/funcionarios-list"]);
      });
    }
    this.resetForm(funcionarioForm);
    this.toastr.success('Operación realizada con éxito', 'Funcionario registrado');
  }

  resetForm(form : NgForm){
    if(form != null)
      form.reset();
    this.funcService.selectedFunc = new Funcionario();
  }

}

import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../../../models/funcionario';
import { FuncService } from '../../../services/func.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Sede } from '../../../models/sede';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {
  public funcionarios: Array<Funcionario> = [];

  constructor(private funcService : FuncService, private toastr : ToastrService, private router: Router) { }

  ngOnInit() {
    this.getFuncionarios();
  }

  public getFuncionarios(){
    this.funcService.getFuncs().subscribe((dataf: Array<Funcionario>) => {
      this.funcService.getSedes().subscribe((data: Array<Sede>) => {
        dataf.forEach(element =>{
          let n = +element.sede;          
          element['idsede']=n;
          element.sede=data[n-1].titulo;         
        });
        this.funcionarios = dataf;
      });     
      console.log(dataf);      
    });
  }

  onEdit(func: Funcionario) {
    this.funcService.selectedFunc = Object.assign({}, func);
    this.router.navigate(["directorio/funcionarios/funcionarios-edit"]);    
  }

  onDelete(id: string) {
    if(confirm('¿Estas seguro que deseas elimiar este Profesor?')) {
      this.funcService.deleteFunc(id).subscribe((data: Array<Funcionario>) => {
        this.getFuncionarios();
        console.log(data);
      });
      this.toastr.warning('Registro eliminado correctamente...', 'Funcionario Removed');
    }
  }

  onAdd(){
    this.funcService.selectedFunc=new Funcionario();
    this.router.navigate(["directorio/funcionarios/funcionarios-edit"]);
  }

}

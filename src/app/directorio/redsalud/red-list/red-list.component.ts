import { Component, OnInit } from '@angular/core';
import { RedesService } from '../../../services/redes.service';
import { Red } from '../../../models/red';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-red-list',
  templateUrl: './red-list.component.html',
  styleUrls: ['./red-list.component.css']
})
export class RedListComponent implements OnInit {
  redList: Red[];

  constructor(private redesService: RedesService, private toastr : ToastrService) { }

  ngOnInit() {
    return this.redesService.getRedes()
    .snapshotChanges().subscribe(item=>{
      this.redList=[];
      item.forEach( element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.redList.push(x as Red);
      });
    });
  }

  onEdit(red: Red) {
    this.redesService.selectedRed = Object.assign({}, red);
  }

  onDelete($key: string) {
    if(confirm('¿Estas seguro que deseas elimiar esta Red?')) {
      this.redesService.deleteRed($key);
      this.toastr.warning('Registro eliminado correctamente...', 'Red removed');
    }
  }

}

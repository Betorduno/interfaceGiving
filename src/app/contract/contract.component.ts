import { UpdateComponent } from './update/update.component';
import { OperationsService } from './../services/operations.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';
import swal from'sweetalert2';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  displayedColumns: string[] = ['contract_id', 'tipo_id', 'id', 'nombre', 'apellido', 'cat', 'edad','cargo', 'acciones'];
  dataSource:[]

  constructor(
    public dialog: MatDialog,
    public contractService: OperationsService
    ) { }

  ngOnInit(): void {
    this.getAll()
    this.dialog.afterAllClosed
    .subscribe(() => {
      this.getAll();
    });
  }

  getAll() {
    this.contractService.findAllContract().subscribe((res)=>{
      this.dataSource=res;
    })
  }
  createContract() {
    this.dialog.open(CreateComponent, {
      width: '400px'
    });
  }

  updateRegister(id:number, upData: any) {
    this.dialog.open(UpdateComponent, {
      width: '400px',
      data:{
        id,
        upData
      }
    });
  }

  deleteRegister(id: number) {
    swal.fire({
      title: 'Estas segur@?',
      text: '¡No podrás recuperar este registro!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.contractService.deleteContract(id).subscribe((res)=>{
          this.getAll();
          swal.fire(
            'Eliminado!',
            'El registro ha sido eliminado.',
            'success'
          )
        }
        ,
        (error)=>{
          swal.fire(
            'Cancelada',
            'El registro está seguro :)',
            'error'
          )
        })
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelada',
          'El registro está seguro :)',
          'error'
        )
      }
    })
    
  }

}

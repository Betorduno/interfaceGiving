import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OperationsService } from 'src/app/services/operations.service';
import { ContractService } from 'src/app/shared/contract.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  tipo_id:number
  id: number
  nombre: string
  apellido:string
  cat:string
  edad:number 
  cargo: string
  
  constructor(
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public dataUpdate: any,
    public serviceForm: ContractService,
    public updateService: OperationsService
  ) {}

  ngOnInit(): void {
   this.tipo_id = this.dataUpdate.upData.tipo_id;
   this.id = this.dataUpdate.upData.id;
   this.nombre = this.dataUpdate.upData.nombre;
   this.apellido = this.dataUpdate.upData.apellido;
   this.cat = this.dataUpdate.upData.cat;
   this.edad = this.dataUpdate.upData.edad;
   this.cargo = this.dataUpdate.upData.cargo;
  }

  updateRegister() {
    this.updateService.updateContract(this.dataUpdate.id, this.serviceForm.form.value).subscribe(res =>{
      this.serviceForm.form.reset();
      this.dialogRef.close();
      swal.fire({    
        icon: 'success',  
        title: 'Actualizar contrato',  
        showConfirmButton: true, 
        text: 'El contrato fue actualizado correctamente'
      }) 
    }, 
    (error)=>{
      this.dialogRef.close();
      swal.fire({    
        icon: 'error',  
        title: 'Actulizar contrato',  
        showConfirmButton: true, 
        text: 'El contrato no se actualizó, comuniquese con soporte.'
      })
    }
    )
  }

}

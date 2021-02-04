import { OperationsService } from './../../services/operations.service';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { ContractService } from 'src/app/shared/contract.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    public serviceForm: ContractService,
    public createService: OperationsService
  ) {}

  ngOnInit(): void {
    this.serviceForm.form.reset();
  }

  createRegister() {
    this.createService.createContract(this.serviceForm.form.value).subscribe(res =>{
      this.dialogRef.close();
      swal.fire({    
        icon: 'success',  
        title: 'Creación de contrato',  
        showConfirmButton: true, 
        text: 'El usuario fue credo correctamente'
      }) 
    }, 
    (error)=>{
      console.log(error);
      swal.fire({    
        icon: 'error',  
        title: 'Creación de contrato',  
        showConfirmButton: true, 
        text: 'El contrato no se creo, comuniquese con soporte.'
      })
    }
    )
  }  
}

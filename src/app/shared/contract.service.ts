import { formatPercent } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor() { }

  form: FormGroup = new FormGroup({
    tipo_id: new FormControl(0, Validators.required),
    id:  new FormControl(0, Validators.required),
    nombre:  new FormControl('', Validators.required),
    apellido:  new FormControl('', Validators.required),
    edad:  new FormControl(0, Validators.required),
    cat:  new FormControl('', Validators.required),
    cargo:  new FormControl('', Validators.required),
  })
  
}

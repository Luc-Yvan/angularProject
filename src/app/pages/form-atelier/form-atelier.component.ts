import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormServiceImpl } from '../../services/form.serviceImpl';
import { Router } from '@angular/router';
import { FormCreate } from '../../core/models/form.list';

@Component({
  selector: 'app-form-atelier',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-atelier.component.html',
  styleUrl: './form-atelier.component.css'
})
export class FormAtelierComponent {
onSubmit() {
  this.formService.create(this.formCreate).subscribe(data=>{
    if(data.statuts==201){
      this.router.navigateByUrl("/")
    }else{
      this.errors=data.results
    }
  })
}
errors:any
  constructor(private formService:FormServiceImpl,private router:Router){

  }
  formCreate:FormCreate={
    depart:"",
    arrivee:"",
    prix:"",
    date:"",
    nbrePlace:0,
    nbrPassager:0
  }
}

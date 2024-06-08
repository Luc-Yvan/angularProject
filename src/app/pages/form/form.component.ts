import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestResponse } from '../../core/models/rest.response';
import { FormList } from '../../core/models/form.list';
import { FormServiceImpl } from '../../services/form.serviceImpl';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  response?:RestResponse<FormList[]>
$index: any;
  constructor(private formService:FormServiceImpl){

  }
paginate(page:number) {
  this.refresh(page)
}

refresh(page:number=0,keyword:string=""){
  this.formService.findAll(page,keyword).subscribe(data=>this.response=data)
}
searchPrix(prix: string) {
  if(prix.length>=3){
      this.refresh(0,prix)
  }
}
  ngOnInit(): void {
    this.formService.findAll().subscribe(data=>this.response=data)
    this.refresh()
  }

}
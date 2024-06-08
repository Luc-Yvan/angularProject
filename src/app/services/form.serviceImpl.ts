import { Injectable } from "@angular/core";
import { FormService } from "./form.service";
import { Observable } from "rxjs";
import { FormCreate, FormList } from "../core/models/form.list";
import { RestResponse } from "../core/models/rest.response";
import { environment } from "../core/environments/environment.development";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn:'root'
})
export class FormServiceImpl implements FormService{
    private apiUrl=`${environment.APIURL}/forms`
    constructor(private http:HttpClient){}
    create(formCreate: FormCreate): Observable<RestResponse<FormCreate>> {
        return this.http.post<RestResponse<FormCreate>>(`${this.apiUrl}`,formCreate)
    }
    findAll(page: number=0, keyword: string=""): Observable<RestResponse<FormList[]>> {
        return this.http.get<RestResponse<FormList[]>>(`${this.apiUrl}?page=${page}&Keyword=${keyword}`)
    }
    
}
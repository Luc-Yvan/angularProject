import { Observable } from "rxjs";
import { FormCreate, FormList } from "../core/models/form.list";
import { RestResponse } from "../core/models/rest.response";

export interface FormService{
    findAll(page:number,keyword:string): Observable<RestResponse<FormList[]>>
    create(formCreate:FormCreate): Observable<RestResponse<FormCreate>>
}
export type FormList={
    id:number,
    depart:string,
    arrivee:string,
    prix:string,
    date:string,
    nbrePlace:number,
    nbrPassager:number
}
export interface FormCreate {
    id?: number,
    depart:string,
    arrivee:string,
    prix:string,
    date:string,
    nbrePlace:number,
    nbrPassager:number
   
}
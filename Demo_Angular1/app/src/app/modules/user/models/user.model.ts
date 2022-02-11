import { EmailValidator, RadioControlValueAccessor } from "@angular/forms";


export interface userdata{
    id: number,
    firstname:string,
    lastname:string,
    email:EmailValidator,
    number:number,
    gender:RadioControlValueAccessor,
    departments:number

    

}
 export interface Department{
    id: number,
    name: string
}
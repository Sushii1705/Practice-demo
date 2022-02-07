import { EmailValidator, RadioControlValueAccessor } from "@angular/forms";

export interface Department{
    id: number,
    name: string
}
export interface userdata{
    id: number,
    firstname:string,
    lastname:string,
    email:EmailValidator,
    number:number,
    gender:RadioControlValueAccessor

}
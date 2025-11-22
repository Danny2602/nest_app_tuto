import {
    IsString, //si el dato es tipo texto
    IsNumber, // SI el dato es numerico
    MinLength
} from 'class-validator'

export class CreateAppointmentDto{ // puede ser una clase o una interface
    @IsString() //decorador para validar que el dato sea tipo string
    @MinLength(3)// para validar la longitud minima del texto
    nombre:string;

    @IsString()
    @MinLength(3)
    email:string;
}
import { IsEmail, IsNotEmpty, IsNumber, IsString, Max } from "class-validator";
export class CreateUserDto{ // puede ser una clase o una interface
    
    @IsEmail()//validar que el dato sea un correo electronico
    @IsNotEmpty()//validar que el dato no este vacio
    @IsString()
    email:string

    @IsString()//validar que el dato sea tipo string
    @IsNotEmpty()//validar que el dato no este vacio
    password:string

    @IsNumber()
    @IsNotEmpty()//validar que el dato no este vacio
    @Max(100)
    edad:string
}
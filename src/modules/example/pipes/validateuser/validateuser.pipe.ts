import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()// decorador para indicar que es un servicio que se puede inyectar
export class ValidateuserPipe implements PipeTransform {// la interfaz PipeTransform obliga a implementar el metodo transform
  transform(value: any, metadata: ArgumentMetadata) {// el metodo transform recibe el valor y los metadatos del argumento
    
    const ageNumber = parseInt(value.age.toString(),10)// convierte el valor de age a numero
    
    if(isNaN(ageNumber)){// si no es un numero lanza una excepcion
      throw new HttpException('Edad debe ser un numero ',HttpStatus.BAD_REQUEST)// lanza una excepcion con el mensaje y el codigo de estado
    }
    
    return {...value,age:ageNumber};// retorna el valor con la edad convertida a numero
  }
}

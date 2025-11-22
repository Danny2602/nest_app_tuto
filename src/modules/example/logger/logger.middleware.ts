import { Injectable, NestMiddleware } from '@nestjs/common';
import{ Response,Request, response} from 'express'
@Injectable()
export class LoggerMiddleware implements NestMiddleware {// el middleware es una funcion que se ejecuta antes de llegar al controlador
  use(req: Request, res: Response, next: () => void) {// el metodo use recibe el request, response y next
    console.log("middleware:",req.originalUrl)// imprime la url original de la solicitud
    next(); // llama al siguiente middleware o al controlador
  }
}

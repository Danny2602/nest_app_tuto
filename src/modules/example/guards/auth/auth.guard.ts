import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {// el useGuard sirve para proteger rutas de acceso no autorizado
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request;// obtener el objeto request
    console.log(request.url);

    if (request.url == '/usuario') return false// si la url es /usuario no permite el acceso

    return true;// permite el acceso en cualquier otro caso
  }
}

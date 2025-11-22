import { Body, Controller,Get, HttpCode, Param, ParseIntPipe, Post, Query, Req, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ExampleService } from './example.service';
import type { Response,Request } from 'express';  //usar type para impirtar express
import { CreateUserDto } from './dto/create-user.dto';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';


@Controller('/example')//quitar esto si no quieres usar esto primero en url para acceder a la ruta
export class ExampleController {
 
    constructor(private exampleService:ExampleService){}

    @Get()
    @ApiTags('example') // Agrgar etiqueta a la documentacion de swagger
    @ApiOperation({ summary: 'Get all users' }) // Descripcion de la operacion
    @ApiOkResponse({ description: 'Successful response' }) // Documentar respuesta exitosa
    getUsers(@Req() request: Request, @Res() response:Response){
        // return this.exampleService.getUsers();
        console.log(request.url)
        response.status(200).json({
            message:'user ingresado',
        })
    }

    @Post()
    // @UsePipes(new ValidationPipe())
    postUsers(@Body() user:CreateUserDto){
        return this.exampleService.createUser(user)
    }
    @Get('/notfound')
    @HttpCode(404)
    notFound(){
        return '404 not found'
    }

    @Get('/error')
    @HttpCode(500)// cambiar el codigo de estado http
    errorPage(){
        return 'Error Route'
    }

    @Get('/ticket/:num')
    getTicket(@Param('num',ParseIntPipe) num:number){//el parseIntPipe convierte el parametro a numero
        return num + 10
    }


    @Get('/usuario')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query:{name:string, age:number}){//el query es un objeto que contiene los parametros de la url
        console.log(typeof query.name)
        console.log(typeof query.age)
        return `hola el nombre es ${query.name} y la edad es ${query.age}}`
    }
}

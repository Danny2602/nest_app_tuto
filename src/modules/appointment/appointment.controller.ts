import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { AppointmentService } from "./appointment.service";
import  { CreateAppointmentDto } from "./dto/create-appointment.dto";
import type { UpdateAppointmentDto } from "./dto/update-appointment.dto";

@Controller('/appointment')

export class AppointmentController{

    constructor(private appointmentService:AppointmentService){}//constructor para el inyectar nuestro servicio}

    @Get() //define que metodo http por el cual va ser solicitado y se define el nombre de la ruta 
    getAllAppointment(@Query() query:any){//ruta que se puede usar obtener todoas las citas
        //buscar en una bdd
        //peticion a otro backend o API
        console.log(query)
        return this.appointmentService.getAllAppointment();// retornado del servicio 
    }
    
    //Metodo para traer uno solo
    @Get('/:id')// appointment/id
    getAppointment(@Param('id') id:string){
        console.log(id)
        return this.appointmentService.getAppointment(parseInt(id))
    }

    //Metodo HTTP Post
    
    // @UsePipes(new ValidationPipe())// para validar los datos que vienen en el cuerpo de la peticion
    @Post()
    createAppointment(@Body() appointment:CreateAppointmentDto){
        // return 'Creando citas'}
        console.log(appointment)
        return this.appointmentService.createAppointment(appointment)
    }

    //Metodo HTTP Put
    @Put()
    updateAppointment(@Body() appoitnment:UpdateAppointmentDto){
        // return 'Actualizando tareas'
        return this.appointmentService.updateAppointment(appoitnment)
    }
    //Metodo HTTP Delete
    @Delete()
    deleteAppointment(){
        // return 'Eliminando citas'
        return this.appointmentService.deleteAppointment()
    }
    //Metodo HTTP Patch
    @Patch()// se usa para actualizaciones parciales algo asi  ejemplo solo actualizar el estado 
    updateAppointmentStatus(){
        // return 'Actualizando parcialmente citas'
        return this.appointmentService.updateAppointmentStatus()
    }
}
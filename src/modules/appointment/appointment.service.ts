import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";

 export interface User{
    name: string,
    email:string
    tfl:number
}

@Injectable()

export class AppointmentService {

    private appointments:any[] = [] //arreglo vacio para almacenar las citas las (:any[]) es para definir el tipo de dato que va almacenar
    
    getAllAppointment(){
        // return {
        //     name:'Danny',
        //     email:'danny@gmail.com',
        //     tfl: 995878111
        // }
        return this.appointments
    }
    getAppointment(id:number){
        const appointmentFound= this.appointments.find(appointment=> appointment.id===id) 
        if(!appointmentFound){
            // return 'Cita no encontrada'
            return new NotFoundException('Dato no encontrado')
        }
        return appointmentFound
    }

    createAppointment(appointment:CreateAppointmentDto){
        this.appointments.push({
            ...appointment,//operador spread para copiar todas las propiedades del objeto appointment
            id: this.appointments.length + 1
        })
        return appointment
    }
    updateAppointment(appointment:UpdateAppointmentDto){
        return 'Cita actualizada'
    }
    deleteAppointment(){
        return 'Cita eliminada'
    }
    updateAppointmentStatus(){
        return 'Cita actualizada parcialmente'
    }

}
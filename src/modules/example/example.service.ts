import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class ExampleService {
    private users:any[]=[
        {
            id:'1',
            nombre:'danny',
            edad:'23'
        },
        {
            id:'2',
            nombre:'noemo',
            edad:'22'
        }
    ]
    getUsers(){
        return this.users
    }
    createUser(user:CreateUserDto){
        this.users.push(user)
        
        return {
            ...user,
            id: this.users.length+1
        }
    }
}

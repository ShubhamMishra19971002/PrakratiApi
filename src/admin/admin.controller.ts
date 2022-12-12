import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private AdminService:AdminService){}
        
        @Get("/getContent")
        async getContent(){
            return this.AdminService.getContent()
        }
    
}

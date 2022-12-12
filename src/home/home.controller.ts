import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
    constructor(private HomeService:HomeService){}

    @Get("/getContent")
    async getContent(){
      return  this.HomeService.getContent()
    }
}

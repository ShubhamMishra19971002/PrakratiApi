import { Injectable } from '@nestjs/common';
import { contentObj } from '../content';

@Injectable()
export class AdminService {
   private contentObj =contentObj
    public async getContent(){
        return this.contentObj
    }
    
}

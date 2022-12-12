import { Injectable } from '@nestjs/common';
import { contentObj } from 'src/content';

@Injectable()
export class HomeService {
    private contentObj =contentObj
    public async getContent(){
        return this.contentObj
    }
}
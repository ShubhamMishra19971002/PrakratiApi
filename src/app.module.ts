import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';


@Module({
  imports: [AdminModule, HomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

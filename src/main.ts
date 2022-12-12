import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  //connecting swagger withour project 
  const config = new DocumentBuilder()
  .setTitle('Prakrati')
  .setDescription('Prakrati A Natural Farming ')
  .setVersion('1.0')
  .addTag('Natural Farming')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

  await app.listen(5000);
}

bootstrap();

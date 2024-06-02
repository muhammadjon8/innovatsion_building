import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Innavatsion Building')
    .setDescription('innavatsion buildings uchun tizimlashtirilgan backend')
    .setVersion('1.0')
    .addTag('InnnovatsionBuilding')
    .build();
  app.setGlobalPrefix('api');
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  app.use(cookieParser());

  await app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
}
bootstrap();

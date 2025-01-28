import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const modules = [
    { name: 'Producers', description: 'The module for Producers', path: 'producers' },
    { name: 'Properties', description: 'The module for Properties', path: 'properties' },
    { name: 'Cultures', description: 'The module for Cultures', path: 'cultures' },
    { name: 'Harvests', description: 'The module for Harvests', path: 'harvests' },
  ];

  modules.forEach(({ description }) => {
    const config = new DocumentBuilder()
      .setDescription(description)
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`api`, app, document);
  });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();

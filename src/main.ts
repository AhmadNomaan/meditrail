import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  const config = new DocumentBuilder()
  .setTitle('MEDITRAIL')
  .setDescription('Medical history all at one place.')
  .setVersion('0.1')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.SERVER_PORT, '0.0.0.0', () => {
    console.clear();
    console.info(
      `\n\n*********  Server is up and Running on port ${process.env.SERVER_PORT}  *************\n\n`,
    );
    console.info(`swagger http://127.0.0.1:${process.env.SERVER_PORT}`);
    console.info(`swagger http://127.0.0.1:${process.env.SERVER_PORT}/swagger`);
    console.info('\n');
  });
}
bootstrap();

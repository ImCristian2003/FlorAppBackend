import 'dotenv/config'; // Carga las variables de entorno
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ forbidUnknownValues: false }));

  const port = process.env.PORT ? Number(process.env.PORT) : 3000;

  // CAMBIO: Escuchar en todas las interfaces (0.0.0.0)
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 App running on port ${port}`);
  console.log(`🌍 Local: http://localhost:${port}`);
  console.log(`🌐 Network: http://[tu-ipv4]:${port}`);
}

// Llama la función bootstrap y captura errores en caso de fallo
bootstrap().catch((err) => {
  console.error('❌ Error starting the application:', err);
});

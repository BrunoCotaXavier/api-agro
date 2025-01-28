import { Module } from '@nestjs/common';
import { ProducerModule } from './producer/producer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultureModule } from './culture/culture.module';
import { PropertyModule } from './property/property.module';
import { HarvestModule } from './harvest/harvest.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ? process.env.DB_PORT : '5432'),
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres123',
      database: process.env.DB_NAME || 'postgres_rural',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true, // obs: true para ambiente dev.
    }),
    ProducerModule,
    CultureModule,
    PropertyModule,
    HarvestModule
  ],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [ProducerController],
  providers: [ProducerService, PrismaService],
})
export class ProducerModule { }
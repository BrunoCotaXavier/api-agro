import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HarvestController } from './harvest.controller';
import { HarvestService } from './harvest.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [HarvestController],
  providers: [HarvestService, PrismaService],
})
export class HarvestModule { }
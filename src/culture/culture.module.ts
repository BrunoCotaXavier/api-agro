import { Module } from '@nestjs/common';
import { CultureController } from './culture.controller';
import { CultureService } from './culture.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [CultureController],
  providers: [CultureService, PrismaService],
})
export class CultureModule {}
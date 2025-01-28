import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateHarvestDto } from './dto/create-harvest.dto';
import { HarvestDto } from './dto/harvest.dto';

@Injectable()
export class HarvestService {
  constructor(private readonly prisma: PrismaService) { };


  async create(createHarvestDto: CreateHarvestDto): Promise<HarvestDto> {
    const { year, plantedArea, propertyId, cultureId } = createHarvestDto;

    return await this.prisma.harvest.create({
      data: {
        year,
        plantedArea,
        propertyId,
        cultureId
      },
    });
  }

  async update(harvestDto: HarvestDto, id: number): Promise<HarvestDto> {
    const { year, plantedArea, propertyId, cultureId } = harvestDto;
    return await this.prisma.harvest.update({
      where: {
        id,
      },
      data: {
        year,
        plantedArea,
        propertyId,
        cultureId
      },
    })
  }

  async delete(id: number): Promise<HarvestDto> {
    return await this.prisma.harvest.delete({
      where: {
        id,
      }
    })
  }

  async getAll(): Promise<HarvestDto[]> {
    return await this.prisma.harvest.findMany();
  }

  async getHarvestById(harvestId: any): Promise<HarvestDto | null> {
    const id = parseInt(harvestId);
    return await this.prisma.harvest.findUnique({
      where: { id },
    });
  }
}

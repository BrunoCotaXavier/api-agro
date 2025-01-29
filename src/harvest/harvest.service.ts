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

  async getAll(page: number, pageSize: number): Promise<{ data: HarvestDto[]; total: number }> {
    const skip = (page - 1) * pageSize;
    const [data, total] = await Promise.all([
      this.prisma.harvest.findMany({ skip, take: pageSize }),
      this.prisma.harvest.count(),
    ]);

    return { data, total };
  }

  async getHarvestById(harvestId: any): Promise<HarvestDto | null> {
    const id = parseInt(harvestId);
    return await this.prisma.harvest.findUnique({
      include: {
        culture: true,
        property: true
      },
      where: { id },
    });
  }
}

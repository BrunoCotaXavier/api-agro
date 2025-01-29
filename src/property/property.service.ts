import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertyDto } from './dto/property.dto';

@Injectable()
export class PropertyService {
  constructor(private readonly prisma: PrismaService) { };

  async create(createPropertyDto: CreatePropertyDto): Promise<PropertyDto> {
    const { name, totalArea, vegetationArea, cultivableArea, state, city, producerId } = createPropertyDto;

    return await this.prisma.property.create({
      data: {
        name,
        totalArea,
        vegetationArea,
        cultivableArea,
        state,
        city,
        producerId
      },
    });
  }

  async update(propertyDto: PropertyDto, id: number): Promise<PropertyDto> {
    const { name, totalArea, vegetationArea, cultivableArea, state, city, producerId } = propertyDto;

    if (vegetationArea + cultivableArea > totalArea) {
      throw new Error(`The sum of the vegetationArea and the cultivableArea cannot be greater than the totalArea`);
    }
    
    return await this.prisma.property.update({
      where: {
        id,
      },
      data: {
        name,
        totalArea,
        vegetationArea,
        cultivableArea,
        state,
        city,
        producerId
      },
    })
  }

  async delete(id: number): Promise<PropertyDto> {
    return await this.prisma.property.delete({
      where: {
        id,
      }
    })
  }

  async getAll(): Promise<PropertyDto[]> {
    return await this.prisma.property.findMany();
  }

  async countProperty() {
    return this.prisma.property.count();
  }

  async countAreaProperty() {
    return this.prisma.property.aggregate({
      _sum: {
        totalArea: true
      }
    });
  }

  async getStatesProperty() {
    return this.prisma.property.findMany({
      distinct: ['state'],
      select: {
        state: true, 
      },
    });
  }

  async getPropertyById(id: number): Promise<PropertyDto | null> {
    return await this.prisma.property.findUnique({
      where: { id },
    });
  }
}

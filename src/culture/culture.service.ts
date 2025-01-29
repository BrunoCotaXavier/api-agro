import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateCultureDto } from './dto/create-culture.dto';
import { CultureDto } from './dto/culture.dto';

@Injectable()
export class CultureService {
  constructor(private readonly prisma: PrismaService) { };
  
  async create(createCultureDtoDto: CreateCultureDto): Promise<CultureDto> {
    const { name } = createCultureDtoDto;
    return await this.prisma.culture.create({
      data: {
        name,
      },
    });
  }

  async update(cultureDto: CultureDto, id: number): Promise<CultureDto> {
    const { name } = cultureDto;
    return await this.prisma.culture.update({
      where: {
        id,
      },
      data: {
        name,
      },
    })
  }

  async delete(id: number): Promise<CultureDto> {
    return await this.prisma.culture.delete({
      where: {
        id,
      }
    })
  }

  async getAll(): Promise<CultureDto[]> {
    return this.prisma.culture.findMany();
  }

  async getCultureById(id: number): Promise<CultureDto | null> {
    return this.prisma.culture.findUnique({
      include: {
        harvests: true,
      },
      where: { id },
    });
  }
}

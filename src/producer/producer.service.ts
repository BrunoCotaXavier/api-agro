import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProducerDto } from './dto/create-producer.dto';
import { ProducerDto } from './dto/producer.dto';

@Injectable()
export class ProducerService {
  constructor(private readonly prisma: PrismaService) { };


  async create(createProducerDto: CreateProducerDto): Promise<ProducerDto> {
    const { name, document, documentType } = createProducerDto;

    return await this.prisma.producer.create({
      data: {
        name,
        document,
        documentType,
      },
    });
  }

  async update(producerDto: ProducerDto, id: number): Promise<ProducerDto> {
    const { name, document, documentType } = producerDto;
    return await this.prisma.producer.update({
      where: {
        id,
      },
      data: {
        name,
        document,
        documentType
      },
    })
  }

  async delete(id: number): Promise<ProducerDto> {
    return await this.prisma.producer.delete({
      where: {
        id,
      }
    })
  }

  async getAll(): Promise<ProducerDto[]> {
    return await this.prisma.producer.findMany();
  }

  async getProducerById(producerId: any): Promise<ProducerDto | null> {
    const id = parseInt(producerId);
    return await this.prisma.producer.findUnique({
      where: { id },
    });
  }
}

import { Controller, Get, Body, Post, Param, Delete, Patch, Query } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerDto } from './dto/producer.dto';
import { CreateProducerDto } from './dto/create-producer.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('producers')
export class ProducerController {
    constructor(private readonly producerService: ProducerService) { }

    @Post()
    async createProducer(@Body() createProducerDto: CreateProducerDto): Promise<ProducerDto> {
        console.log('### execute createProducer');
        return await this.producerService.create(createProducerDto);
    }

    @Patch(':id')
    async updateProducer(@Param('id') id: string, @Body() producerDto: ProducerDto): Promise<ProducerDto> {
        console.log('### execute updateProducer');
        return await this.producerService.update(producerDto, parseInt(id));
    }

    @Delete(':id')
    async deleteProducer(@Param('id') id: string): Promise<ProducerDto> {
        console.log('### execute deleteProducer');
        return await this.producerService.delete(parseInt(id));
    }

    @Get()
    @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
    @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 10 })
    async getProducer(@Query('page') page = '1', @Query('pageSize') pageSize = '10') {
      console.log('### execute getAll');
      const pageNumber = parseInt(page, 10);
      const pageSizeNumber = parseInt(pageSize, 10);
      return await this.producerService.getAll(pageNumber, pageSizeNumber);
    }

    @Get(':id')
    async getProducerById(@Param('id') id: string) {
        console.log('### execute getProducerById');
        const producer = await this.producerService.getProducerById(parseInt(id));
        if (!producer) {
            throw new Error(`Producer with ID ${id} not found`);
        }
        return producer;
    }

}

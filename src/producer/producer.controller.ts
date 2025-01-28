import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { ProducerDto } from './dto/producer.dto';
import { CreateProducerDto } from './dto/create-producer.dto';

@Controller('producers')
export class ProducerController {
    constructor(private readonly producerService: ProducerService) { }

    @Post()
    async createProducer(@Body() createProducerDto: CreateProducerDto): Promise<ProducerDto> {
        console.log('### execute createProducer');
        return await this.producerService.create(createProducerDto);
    }

    @Post(':id')
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
    async getProducers() {
        console.log('### execute getAll');
        return await this.producerService.getAll();
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

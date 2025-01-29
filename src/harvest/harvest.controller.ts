import { Controller, Get, Body, Post, Param, Delete, Patch, Query } from '@nestjs/common';
import { HarvestService } from './harvest.service';
import { HarvestDto } from './dto/harvest.dto';
import { CreateHarvestDto } from './dto/create-harvest.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('harvests')
export class HarvestController {
    constructor(private readonly harvestService: HarvestService) { }

    @Post()
    async createHarvest(@Body() createHarvestDto: CreateHarvestDto): Promise<HarvestDto> {
        console.log('### execute createHarvest');
        return await this.harvestService.create(createHarvestDto);
    }

    @Patch(':id')
    async updateHarvest(@Param('id') id: string, @Body() harvestDto: HarvestDto): Promise<HarvestDto> {
        console.log('### execute updateHarvest');
        return await this.harvestService.update(harvestDto, parseInt(id));
    }

    @Delete(':id')
    async deleteHarvest(@Param('id') id: string): Promise<HarvestDto> {
        console.log('### execute deleteHarvest');
        return await this.harvestService.delete(parseInt(id));
    }

    @Get()
    @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
    @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 10 })
    async getHarvest(@Query('page') page = '1', @Query('pageSize') pageSize = '10') {
        console.log('### execute getAll');
        const pageNumber = parseInt(page, 10);
        const pageSizeNumber = parseInt(pageSize, 10);
        return await this.harvestService.getAll(pageNumber, pageSizeNumber);
    }

    @Get(':id')
    async getHarvestById(@Param('id') id: string) {
        console.log('### execute getHarvestById');
        const harvest = await this.harvestService.getHarvestById(parseInt(id));
        if (!harvest) {
            throw new Error(`Harvest with ID ${id} not found`);
        }
        return harvest;
    }

}

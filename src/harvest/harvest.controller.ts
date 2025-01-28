import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { HarvestService } from './harvest.service';
import { HarvestDto } from './dto/harvest.dto';
import { CreateHarvestDto } from './dto/create-harvest.dto';

@Controller('harvests')
export class HarvestController {
    constructor(private readonly harvestService: HarvestService) { }

    @Post()
    async createHarvest(@Body() createHarvestDto: CreateHarvestDto): Promise<HarvestDto> {
        console.log('### execute createHarvest');
        return await this.harvestService.create(createHarvestDto);
    }

    @Post(':id')
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
    async getHarvest() {
        console.log('### execute getAll');
        return await this.harvestService.getAll();
    }

    @Get(':id')
    async getProducerById(@Param('id') id: string) {
        console.log('### execute getHarvestById');
        const harvest = await this.harvestService.getHarvestById(parseInt(id));
        if (!harvest) {
            throw new Error(`Harvest with ID ${id} not found`);
        }
        return harvest;
    }

}

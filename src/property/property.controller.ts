import { Controller, Get, Body, Post, Param, Delete, Patch, Query } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyDto } from './dto/property.dto';
import { CreatePropertyDto } from './dto/create-property.dto';
import { ApiQuery } from '@nestjs/swagger';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService,) { }

  @Post()
  async createProperty(@Body() createPropertyDto: CreatePropertyDto): Promise<PropertyDto> {
    console.log('### execute createProperty');
    return await this.propertyService.create(createPropertyDto);
  }

  @Patch(':id')
  async updateProperty(@Param('id') id: string, @Body() propertyDto: PropertyDto): Promise<PropertyDto> {
    console.log('### execute updateProperty');
    return await this.propertyService.update(propertyDto, parseInt(id));
  }

  @Delete(':id')
  async deleteProperty(@Param('id') id: string): Promise<PropertyDto> {
    console.log('### execute deleteProperty');
    return await this.propertyService.delete(parseInt(id));
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 10 })
  async getPropertys(@Query('page') page = '1', @Query('pageSize') pageSize = '10') {
    console.log('### execute getAll');
    const pageNumber = parseInt(page, 10);
    const pageSizeNumber = parseInt(pageSize, 10);
    return await this.propertyService.getAll(pageNumber, pageSizeNumber);
  }
  
  @Get('state')
  async listSatePropertys() {
    console.log('### execute countAreaPropertys');
    return await this.propertyService.getStatesProperty();
  }

  @Get('count')
  async countPropertys() {
    console.log('### execute countPropertys');
    return await this.propertyService.countProperty();
  }

  @Get('count/area')
  async countAreaPropertys() {
    console.log('### execute countAreaPropertys');
    return await this.propertyService.countAreaProperty();
  }


  @Get(':id')
  async getPropertyById(@Param('id') id: string) {
    console.log('### execute getPropertyById');
    const property = await this.propertyService.getPropertyById(parseInt(id));
    if (!property) {
      throw new Error(`Culture with ID ${id} not found`);
    }
    return property;
  }
}

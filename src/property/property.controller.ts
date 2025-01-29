import { Controller, Get, Body, Post, Param, Delete, Patch } from '@nestjs/common';
import { PropertyService } from './property.service';
import { PropertyDto } from './dto/property.dto';
import { CreatePropertyDto } from './dto/create-property.dto';

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
  async getPropertys() {
    console.log('### execute getAll');
    return await this.propertyService.getAll();
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

  @Get('state')
  async listSatePropertys() {
    console.log('### execute countAreaPropertys');
    return await this.propertyService.getStatesProperty();
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

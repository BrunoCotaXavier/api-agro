import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { CultureService } from './culture.service';
import { CultureDto } from './dto/culture.dto';
import { CreateCultureDto } from './dto/create-culture.dto';

@Controller('culture')
export class CultureController {
  constructor(private readonly cultureService: CultureService) {}

  @Post()
  async createCulture(@Body() createCultureDto: CreateCultureDto): Promise <CultureDto> {
    console.log('### execute createCulture');
    return this.cultureService.create(createCultureDto);
  }

  @Post(':id')
  async updateCulture(@Param('id') id: string, @Body() cultureDto: CultureDto): Promise <CultureDto> {
    console.log('### execute updateCulture');
    return await this.cultureService.update(cultureDto, parseInt(id));
  }

  @Delete(':id')
  async deleteCulture(@Param('id') id: string): Promise <CultureDto> {
    console.log('### execute deleteCulture');
    return await this.cultureService.delete(parseInt(id));
  }

  @Get()
  async getCulture() {
    console.log('### execute getAll');
    return await this.cultureService.getAll();
  }
  
  @Get(':id')
  async getCultureById(@Param('id') id: string): Promise <CultureDto> {
    console.log('### execute getCultureById');
    const culture = await this.cultureService.getCultureById(parseInt(id));
    if (!culture) {
      throw new Error(`Culture with ID ${id} not found`);
    }
    return culture;
  }
}

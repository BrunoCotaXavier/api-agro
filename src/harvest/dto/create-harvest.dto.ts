import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHarvestDto {
  @ApiProperty({ example: 2024, description: 'Ano da colheita' })
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty({ example: 100, description: 'Área plantada em hectares' })
  @IsNumber()
  @IsNotEmpty()
  plantedArea: number;

  @ApiProperty({ example: 1, description: 'ID da propriedade associada à colheita' })
  @IsNumber()
  @IsNotEmpty()
  propertyId: number;

  @ApiProperty({ example: 2, description: 'ID da cultura associada à colheita' })
  @IsNumber()
  @IsNotEmpty()
  cultureId: number;
}

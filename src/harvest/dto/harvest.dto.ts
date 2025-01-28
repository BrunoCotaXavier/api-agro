import { ApiProperty } from '@nestjs/swagger';

export class HarvestDto {
  @ApiProperty({ example: 1, description: 'ID do Produtor' })
  id: number;
  
  @ApiProperty({ example: 2025, description: 'Ano da Safra' })
  year: number;
  
  @ApiProperty({ example: 200, description: 'Area em Hectares' })
  plantedArea: number;
  
  @ApiProperty({ example: 1, description: 'ID da Propiedade' })
  propertyId: number;

  @ApiProperty({ example: 1, description: 'ID da Cultura' })
  cultureId: number;
}
